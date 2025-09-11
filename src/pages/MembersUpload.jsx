import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowLeft,
  Plus,
  Image as ImageIcon,
  Link as LinkIcon,
  FileText,
  Video as VideoIcon,
  Music,
  Type,
  X,
  Camera,
  ThumbsUp,
  MoreHorizontal,
  Trash2,
  PlayCircle,
} from "lucide-react";
import axios from "axios";

// Import the NEW lightbox library and its styles
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// ===================================================================================
// 1. MOCK DATA & USER ID (No changes needed here)
// ===================================================================================
// ... your mock data remains the same ...
const LOGGED_IN_USER_ID = localStorage.getItem("id");

// ===================================================================================
// 2. CREATE POST MODAL (No changes needed here)
// ===================================================================================
const CreatePostModal = ({ onSave, onClose }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [postType, setPostType] = useState("text");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    setContent(file);
  };

  const handleSave = async () => {
    if (!content && postType !== "text" && postType !== "link" && !caption)
      return;

    const formData = new FormData();
    let apiPostType = postType;
    if (postType === "image") apiPostType = "photo";

    formData.append("type", apiPostType);
    formData.append("description", caption || "");
    formData.append("visibility", "public");

    if (postType !== "text" && postType !== "link") {
      if (content instanceof File) {
        formData.append("file", content);
      } else {
        console.error("Content is not a File:", content);
        return;
      }
    }

    try {
      const response = await axios.post(`${API_URL}/media/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);
      onSave(response.data.media);
    } catch (error) {
      console.error("Upload failed:", error);
    }

    onClose();
  };

  const PostTypeButton = ({ type, label, icon: Icon }) => (
    <button
      onClick={() => {
        setPostType(type);
        setContent("");
        setCaption("");
        setFileName("");
      }}
      className={`flex-1 p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
        postType === type
          ? "bg-purple-600 text-white"
          : "bg-slate-700 hover:bg-slate-600 text-slate-300"
      }`}
    >
      <Icon size={18} /> <span>{label}</span>
    </button>
  );

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg p-6 relative"
      >
        <h2 className="text-xl font-bold text-white mb-4">Create Post</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X />
        </button>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <PostTypeButton type="text" label="Text" icon={Type} />
          <PostTypeButton type="image" label="Image" icon={ImageIcon} />
          <PostTypeButton type="video" label="Video" icon={VideoIcon} />
          <PostTypeButton type="audio" label="Audio" icon={Music} />
          <PostTypeButton type="document" label="Doc" icon={FileText} />
          <PostTypeButton type="link" label="Link" icon={LinkIcon} />
        </div>

        <div className="space-y-4">
          {postType !== "text" && postType !== "link" && (
            <div className="space-y-3">
              <label className="block w-full cursor-pointer bg-slate-700 hover:bg-slate-600 p-3 rounded-lg text-slate-300 text-center border border-dashed border-slate-600">
                Upload {postType}
                <input
                  type="file"
                  className="hidden"
                  accept={
                    postType === "image"
                      ? "image/*"
                      : postType === "video"
                      ? "video/*"
                      : postType === "audio"
                      ? "audio/*"
                      : ".pdf,.doc,.docx"
                  }
                  onChange={handleFileChange}
                />
              </label>
              {fileName && (
                <p className="text-xs text-slate-400">Selected: {fileName}</p>
              )}
            </div>
          )}

          {postType === "link" && (
            <input
              type="url"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste a link..."
              className="w-full bg-slate-700 text-white rounded-lg p-2 border border-slate-600"
            />
          )}

          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={postType === "text" ? 4 : 2}
            placeholder={
              postType === "text" ? "What's on your mind?" : "Add a caption..."
            }
            className="w-full bg-slate-700 text-white rounded-lg p-2 border border-slate-600"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold flex items-center space-x-2 disabled:bg-slate-500"
            disabled={!content && !caption}
          >
            <Plus size={16} /> <span>Post</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// ===================================================================================
// 3. POST CARD (No changes needed here)
// ===================================================================================
const PostCard = ({ post, author, onDelete, isAuthor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!post || !author) {
    return null;
  }

  const timeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    if (seconds < 60) return "Just now";
    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
    };
    for (let unit in intervals) {
      const interval = Math.floor(seconds / intervals[unit]);
      if (interval >= 1)
        return `${interval} ${unit}${interval === 1 ? "" : "s"} ago`;
    }
    return "Just now";
  };

  const postText = post.description;

  return (
    <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20">
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={author.profilePicture}
            alt={author.name_of_rotarian}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-white text-lg">
              {author.name_of_rotarian}
            </h3>
            <p className="text-sm text-slate-400">{timeAgo(post.createdAt)}</p>
          </div>
        </div>
        {isAuthor && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700 transition-colors"
            >
              <MoreHorizontal size={20} />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-32 bg-slate-700 border border-slate-600 rounded-lg shadow-xl z-10"
                >
                  <button
                    onClick={() => {
                      onDelete(post.id);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 size={16} /> <span>Delete</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {postText && (
        <div className="px-4 pb-4">
          <p className="text-slate-200 whitespace-pre-wrap">{postText}</p>
        </div>
      )}

      <div className="bg-slate-900/20">
        {post.type === "photo" && (
          <img
            src={post.fileUrl}
            alt={post.description || "Post image"}
            className="w-full h-auto max-h-[400px] object-cover"
          />
        )}
        {post.type === "video" && (
          <video
            src={post.fileUrl}
            controls
            className="w-full h-auto bg-black"
          ></video>
        )}
      </div>
      {post.type === "audio" && (
        <audio controls className="w-full p-4" src={post.fileUrl} />
      )}
      {post.type === "document" && (
        <div className="px-4 pb-4">
          <a
            href={post.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-700/50 p-3 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <FileText className="text-purple-400 flex-shrink-0" size={32} />
            <div>
              <p className="text-blue-400 hover:underline break-all text-sm font-semibold">
                {post.description || post.originalName || "View Document"}
              </p>
            </div>
          </a>
        </div>
      )}
      {post.type === "link" && (
        <div className="px-4 pb-4">
          <a
            href={post.content}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline break-all"
          >
            {post.content}
          </a>
        </div>
      )}
    </div>
  );
};

// ===================================================================================
// 4. TAB BUTTON COMPONENT (No changes needed here)
// ===================================================================================
const TabButton = ({ name, activeTab, setActiveTab, children, count }) => (
  <button
    onClick={() => setActiveTab(name)}
    className={`px-4 py-2 font-semibold text-sm rounded-t-lg transition-colors relative ${
      activeTab === name
        ? "text-white bg-slate-800"
        : "text-slate-400 hover:text-white"
    }`}
  >
    {children}
    <span className="ml-2 bg-slate-700 text-slate-300 text-xs font-bold px-1.5 py-0.5 rounded-full">
      {count}
    </span>
    {activeTab === name && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
        layoutId="underline"
      />
    )}
  </button>
);

// ===================================================================================
// 5. MAIN APP (Updated with react-photo-view)
// ===================================================================================
const MembersCornerApp = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  // State for tabs
  const [activeTab, setActiveTab] = useState("all");

  const avatarColors = [
    "f87171",
    "60a5fa",
    "34d399",
    "c084fc",
    "fbbf24",
    "f472b6",
  ];



  const handleProfileImageChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fieldType", "profile"); // Specify that this is a profile picture

  try {
    const uploadRes = await axios.post(`${API_URL}/auth/updateProfileCover`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Profile upload response:", uploadRes);

    const imageUrl = uploadRes?.data?.user?.profilePicture;
        getMembersData(); // Refresh member data to get the updated cover picture


    // Update user profile
    // await axios.patch(
    //   `${API_URL}/user/${selectedMember.id}`,
    //   { profilePicture: imageUrl },
    //   {
    //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    //   }
    // );

    // Update state instantly
    setMembers((prev) =>
      prev.map((m) =>
        m.id === selectedMember.id ? { ...m, profilePicture: imageUrl } : m
      )
    );
  } catch (err) {
    console.error("Profile image update failed:", err);
  }
};

const handleCoverImageChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fieldType", "cover"); // Specify that this is a cover picture

  try {
    const coverRes = await axios.post(`${API_URL}/auth/updateProfileCover`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
     console.log("Cover upload response:", coverRes);

    const imageUrl = coverRes.data.user.coverPicture;


    getMembersData(); // Refresh member data to get the updated cover picture

    // Update state instantly
    setMembers((prev) =>
      prev.map((m) =>
        m.id === selectedMember.id ? { ...m, coverPicture: imageUrl } : m
      )
    );
  } catch (err) {
    console.error("Cover image update failed:", err);
  }
};


  const getAvatarColor = (name) => {
    if (!name) return "6b7280";
    const sum = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return avatarColors[sum % avatarColors.length];
  };

  useEffect(() => {
    getMembersData();
    getMembersFeed();
  }, []);

  useEffect(() => {
    setActiveTab("all");
  }, [selectedMemberId]);

  const getMembersFeed = async () => {
    try {
      const response = await axios.get(`${API_URL}/media/my`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("MEMBERS FEEED", response.data.media);
      setAllPosts(response.data.media || []);
    } catch (error) {
      console.error("Error fetching media feed:", error);
    }
  };

  const getMembersData = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/all`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("MEMBERS DATA", response.data);
      setMembers(response.data.users);
    } catch (error) {
      console.error("Error fetching members data:", error);
    }
  };

  const selectedMember = useMemo(
    () => members.find((m) => m.id === selectedMemberId),
    [members, selectedMemberId]
  );
  const filteredMembers = useMemo(
    () =>
      members.filter((m) =>
        m.name_of_rotarian.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [members, searchTerm]
  );

  const memberPosts = useMemo(() => {
    if (!selectedMember) return [];
    return allPosts
      .filter((p) => p.userId === selectedMember.id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [allPosts, selectedMember]);

  const photos = useMemo(
    () => memberPosts.filter((p) => p.type === "photo"),
    [memberPosts]
  );
  const videos = useMemo(
    () => memberPosts.filter((p) => p.type === "video"),
    [memberPosts]
  );

  const handleCreatePost = (newPost) => {
    setAllPosts((prev) => [newPost, ...prev]);
  };

  const handleDeletePost = async (postId) => {
    setAllPosts((prev) => prev.filter((p) => p.id !== postId));
    const id = postId;
    console.log("Deleting post with ID:", id);
    try {
      await axios.delete(`${API_URL}/media/delete/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

      });
    } catch (error) {
      console.error("Failed to delete post:", error);
      getMembersFeed();
    }
  };

  
  return (
    <div className="bg-slate-950 min-h-screen text-white p-6 pt-24 md:pt-30">
      <AnimatePresence mode="wait">
        {!selectedMemberId ? (
          <motion.div
            key="directory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                Members Directory
              </h1>
              <p className="text-slate-400 text-lg">
                Rotary Club of East Bhopal
              </p>
            </div>
            <div className="relative mb-8 max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search for a member..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 text-center cursor-pointer hover:bg-slate-700 hover:border-blue-500 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={
                      member.profilePicture ||
                      `https://placehold.co/200x200/${getAvatarColor(
                        member.name_of_rotarian
                      )}/ffffff?text=${
                        member.name_of_rotarian
                          ? member.name_of_rotarian
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .slice(0, 2)
                          : "U"
                      }`
                    }
                    alt={member.name_of_rotarian}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-600 object-cover"
                  />
                  <h3 className="font-bold text-lg text-white">
                    {member.name_of_rotarian}
                  </h3>
                  <p className="text-sm text-blue-400">
                    {member.classification_profession}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          selectedMember && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setSelectedMemberId(null)}
                className="flex items-center space-x-2 text-slate-300 hover:text-white mb-4 z-20 relative"
              >
                {" "}
                <ArrowLeft /> <span>Back to Directory</span>{" "}
              </button>
<div className="relative">
  <img
    src={
      selectedMember.coverPicture ||
      "https://placehold.co/1200x400/1e293b/ffffff?text=Rotary"
    }
    alt="Cover"
    className="w-full h-48 md:h-60 object-cover rounded-2xl bg-slate-800"
  />
  {LOGGED_IN_USER_ID == selectedMember.id && (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="coverUpload"
        onChange={handleCoverImageChange}
      />
      <label
        htmlFor="coverUpload"
        className="absolute top-2 right-2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-black/80"
      >
        Change Cover
      </label>
    </>
  )}
</div>

<div className="-mt-16 relative z-10 flex flex-col items-center text-center px-4">
  <div className="relative">
    <img
      src={
        selectedMember.profilePicture ||
        `https://placehold.co/200x200/${getAvatarColor(
          selectedMember.name_of_rotarian
        )}/ffffff?text=${selectedMember.name_of_rotarian
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)}`
      }
      alt={selectedMember.name_of_rotarian}
      className="w-32 h-32 rounded-full border-4 border-slate-900 shadow-lg object-cover"
    />
    {LOGGED_IN_USER_ID == selectedMember.id && (
      <>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profileUpload"
          onChange={handleProfileImageChange}
        />
        <label
          htmlFor="profileUpload"
          className="absolute bottom-0 right-0 bg-black/60 text-white p-1.5 rounded-full cursor-pointer hover:bg-black/80"
        >
          <Camera size={18} />
        </label>
      </>
    )}
  </div>
  <h2 className="mt-4 text-2xl font-bold">
    {selectedMember.name_of_rotarian}
  </h2>
  <p className="text-blue-400">{selectedMember.classification_profession}</p>
  <p className="text-slate-400 max-w-lg mt-2">{selectedMember.bio}</p>
</div>

              {LOGGED_IN_USER_ID == selectedMember.id && (
                <div className="mt-6 text-center">
                  {" "}
                  <button
                    onClick={() => setIsCreatingPost(true)}
                    className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-lg font-semibold flex items-center justify-center mx-auto gap-2 transition-colors"
                  >
                    {" "}
                    <Plus size={16} /> Create Post{" "}
                  </button>{" "}
                </div>
              )}
              <hr className="mt-8" />
              <div className="mt-10 max-w-3xl mx-auto">
                <div className="border-b border-slate-700 flex space-x-2">
                  <TabButton
                    name="all"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    count={memberPosts.length}
                  >
                    All Posts
                  </TabButton>
                  <TabButton
                    name="photos"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    count={photos.length}
                  >
                    Photos
                  </TabButton>
                  <TabButton
                    name="videos"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    count={videos.length}
                  >
                    Videos
                  </TabButton>
                </div>

                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === "all" && (
                        <div className="space-y-6">
                          {memberPosts.length > 0 ? (
                            memberPosts.map((p) => (
                              <PostCard
                                key={p.id}
                                post={p}
                                author={selectedMember}
                                onDelete={handleDeletePost}
                                isAuthor={
                                  LOGGED_IN_USER_ID == selectedMember.id
                                }
                              />
                            ))
                          ) : (
                            <div className="text-center py-12 text-slate-500">
                              No posts yet.
                            </div>
                          )}
                        </div>
                      )}

                      {activeTab === "photos" && (
                        <PhotoProvider>
                          {photos.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {photos.map((photo) => (
                                <PhotoView key={photo.id} src={photo.fileUrl}>
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                    }}
                                    className="cursor-pointer aspect-square bg-slate-800 rounded-lg overflow-hidden group"
                                  >
                                    <img
                                      src={photo.thumbUrl || photo.fileUrl}
                                      alt={photo.description}
                                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                                    />
                                  </motion.div>
                                </PhotoView>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-12 text-slate-500">
                              No photos yet.
                            </div>
                          )}
                        </PhotoProvider>
                      )}

                      {activeTab === "videos" && (
                        <PhotoProvider>
                          {videos.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {videos.map((video) => (
                                <PhotoView
                                  key={video.id}
                                  src={video.fileUrl}
                                  render={({ scale, antdIcon }) => {
                                    // Custom render for video
                                    return (
                                      <video
                                        src={video.fileUrl}
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        style={{
                                          transform: `scale(${scale})`,
                                          width: "auto",
                                          height: "auto",
                                          maxWidth: "90vw",
                                          maxHeight: "90vh",
                                        }}
                                      />
                                    );
                                  }}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                    }}
                                    className="cursor-pointer aspect-square bg-slate-800 rounded-lg overflow-hidden group relative flex items-center justify-center"
                                  >
                                    <img
                                      src={video.thumbUrl}
                                      alt={video.description}
                                      className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
                                    />
                                    <div className="absolute text-white bg-black/50 rounded-full p-3 transition-transform group-hover:scale-110">
                                      <PlayCircle size={32} />
                                    </div>
                                  </motion.div>
                                </PhotoView>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-12 text-slate-500">
                              No videos yet.
                            </div>
                          )}
                        </PhotoProvider>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCreatingPost && (
          <CreatePostModal
            onClose={() => setIsCreatingPost(false)}
            onSave={handleCreatePost}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MembersCornerApp;
