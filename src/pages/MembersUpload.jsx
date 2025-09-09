import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowLeft,
  Plus,
  Image as ImageIcon,
  Link as LinkIcon,
  FileText,
  Video,
  Music,
  Type,
  X,
  Camera,
  ThumbsUp,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import axios from "axios";

// ===================================================================================
// 1. MOCK DATA
// ===================================================================================
const initialMembers = [
  {
    id: "user1",
    name: "Dr. Anjali Sharma",
    image: "https://placehold.co/200x200/f87171/ffffff?text=AS",
    coverImage:
      "https://placehold.co/1200x400/1e293b/ffffff?text=Rotary+Event",
    role: "Club President",
    bio: "A passionate pediatrician dedicated to community health and child welfare. Leading our club with vision and heart.",
    email: "anjali.s@rotary.demo",
    phone: "+91 98765 43210",
    posts: [
      {id: 'p1', type: 'image', content: 'https://placehold.co/600x400/34d399/ffffff?text=Tree+Plantation', caption: 'Our annual tree plantation drive was a huge success! So proud of our team.', timestamp: new Date('2025-09-03T10:00:00Z').toISOString()},
    ],
  },
  {
    id: "user2",
    name: "Rohan Gupta",
    image: "https://placehold.co/200x200/60a5fa/ffffff?text=RG",
    coverImage:
      "https://placehold.co/1200x400/0f172a/ffffff?text=Community+Meetup",
    role: "Club Secretary",
    bio: "An enthusiastic entrepreneur focused on leveraging technology for social good. I believe in service above self.",
    email: "rohan.g@rotary.demo",
    phone: "+91 98765 43211",
    posts: [
        {id: 'p3', type: 'image', content: 'https://placehold.co/600x400/c084fc/ffffff?text=Youth+Seminar', caption: 'Incredible turnout for the Youth Leadership Seminar. The future is bright!', timestamp: new Date('2025-08-20T12:00:00Z').toISOString()},
    ],
  },
];




// --- Hardcoded logged-in user ---
const LOGGED_IN_USER_ID = "user2";


// 2. CREATE POST MODAL
// ===================================================================================
const CreatePostModal = ({ onSave, onClose }) => {
  const [postType, setPostType] = useState("text");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => setContent(event.target.result);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!content && (postType !== 'text' && postType !== 'link') && !caption) return;
    const newPost = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      type: postType,
      content: postType === 'text' ? caption : content,
      caption: caption,
    };
    onSave(newPost);
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
          <PostTypeButton type="video" label="Video" icon={Video} />
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
                    postType === "image" ? "image/*" :
                    postType === "video" ? "video/*" :
                    postType === "audio" ? "audio/*" : ".pdf,.doc,.docx"
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
            rows={postType === 'text' ? 4 : 2}
            placeholder={postType === 'text' ? "What's on your mind?" : "Add a caption..."}
            className="w-full bg-slate-700 text-white rounded-lg p-2 border border-slate-600"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold flex items-center space-x-2 disabled:bg-slate-500"
            disabled={!content && !caption}
          >
            <Plus size={16} />
            <span>Post</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};


// 3. POST CARD
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
        if (seconds < 60) return 'Just now';
        const intervals = { year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60 };
        for (let unit in intervals) {
            const interval = Math.floor(seconds / intervals[unit]);
            if (interval >= 1) return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
        }
        return 'Just now';
    };

    const isDataUrl = (s) => s && s.startsWith('data:');
    
    const getYouTubeEmbedUrl = (url) => {
        try {
            if (!url || !url.startsWith('http')) return null;
            const videoId = new URL(url).searchParams.get('v');
            return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
        } catch (error) { return null; }
    };

    const embedUrl = post.type === 'video' && !isDataUrl(post.content) ? getYouTubeEmbedUrl(post.content) : null;
    const postText = post.type === 'text' ? post.content : post.caption;

    return (
        <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20">
            <div className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <img src={author.image} alt={author.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="font-bold text-white text-lg">{author.name}</h3>
                        <p className="text-sm text-slate-400">{timeAgo(post.timestamp)}</p>
                    </div>
                </div>
                {isAuthor && (
                    <div className="relative" ref={menuRef}>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700 transition-colors">
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
                                        <Trash2 size={16} />
                                        <span>Delete</span>
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
                {post.type === 'image' && <img src={post.content} alt={post.caption || 'Post image'} className="w-full h-auto max-h-[400px] object-cover" />}
                {post.type === 'video' && embedUrl && <div className="aspect-video"><iframe src={embedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe></div>}
                {post.type === 'video' && !embedUrl && <video src={post.content} controls className="w-full h-auto bg-black"></video>}
            </div>
            {post.type === 'audio' && <audio controls className="w-full p-4"><source src={post.content} /></audio>}
            {post.type === 'document' && (
                 <div className="px-4 pb-4">
                    <a href={post.content} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-slate-700/50 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                       <FileText className="text-purple-400 flex-shrink-0" size={32} />
                       <div><p className="text-blue-400 hover:underline break-all text-sm font-semibold">{post.caption || 'View Document'}</p></div>
                   </a>
               </div>
            )}
            {post.type === "link" && (
                <div className="px-4 pb-4">
                    <a href={post.content} target="_blank" rel="noreferrer" className="text-blue-400 underline break-all">{post.content}</a>
                </div>
            )}
{/*             
            <div className="px-4 py-2 border-t border-slate-700/50 flex items-center">
                <button className="flex items-center gap-2 p-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-200">
                    <ThumbsUp size={20} />
                    <span className="font-semibold">Like</span>
                </button>
            </div> */}
        </div>
    );
};


// 4. MAIN APP
// ===================================================================================
const MembersCornerApp = () => {
    const API_URL = import.meta.env.VITE_API_URL;
  const [members, setMembers] = useState(initialMembers);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");




useEffect(() => {
    getMembersData();
}, [])


const getMembersData = async() => {
try {

        const response = await axios.get(`${API_URL}/user/all`,{

        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });

    console.log("Members Data:", response);

    
} catch (error) {

    console.error("Error fetching members data:", error);
    
}
   
}




  const selectedMember = useMemo(() => 
    members.find((m) => m.id === selectedMemberId),
    [members, selectedMemberId]
  );

  const filteredMembers = useMemo(() =>
    members.filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [members, searchTerm]
  );
  
  const sortedPosts = useMemo(() =>
    selectedMember?.posts?.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    ) || [],
    [selectedMember]
  );

  const handleUpdate = (updates) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === selectedMemberId ? { ...m, ...updates } : m
      )
    );
  };
  
  const handleFileUpdate = (e, field) => {
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
          handleUpdate({ [field]: event.target.result });
      };
      reader.readAsDataURL(file);
  }

  const handleCreatePost = (newPost) => {
    handleUpdate({ posts: [newPost, ...(selectedMember?.posts || [])] });
  };

  const handleDeletePost = (postId) => {
    if (!selectedMember) return;
    const updatedPosts = selectedMember.posts.filter(p => p.id !== postId);
    handleUpdate({ posts: updatedPosts });
  };
  
  return (
    <div className="bg-slate-950 min-h-screen text-white p-6 pt-30">
      <AnimatePresence mode="wait">
        {!selectedMemberId ? (
          // LEVEL 1: DIRECTORY LIST VIEW
          <motion.div key="directory" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">Members Directory</h1>
              <p className="text-slate-400 text-lg">Rotary Club of East Bhopal</p>
            </div>
            <div className="relative mb-8 max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input type="text" placeholder="Search for a member..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMembers.map(member => (
                <motion.div 
                  key={member.id} 
                  onClick={() => setSelectedMemberId(member.id)} 
                  className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 text-center cursor-pointer hover:bg-slate-700 hover:border-blue-500 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-600 object-cover" />
                  <h3 className="font-bold text-lg text-white">{member.name}</h3>
                  <p className="text-sm text-blue-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          // LEVEL 2: PROFILE VIEW
          <motion.div key="profile" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                         <button onClick={() => setSelectedMemberId(null)} className="flex items-center space-x-2 text-slate-300 hover:text-white mb-4 z-20 relative">
                <ArrowLeft />
                <span>Back to Directory</span>
              </button>
            <div className="relative">
                
              <img
                src={selectedMember.coverImage}
                alt="Cover"
                className="w-full h-60 object-cover rounded-2xl"
              />
              {LOGGED_IN_USER_ID === selectedMember.id && (
                <label className="absolute bottom-3 right-3 bg-black/60 px-3 py-1.5 rounded-lg cursor-pointer text-sm flex items-center gap-2">
                  <Camera size={14} /> Change Cover
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpdate(e, 'coverImage')}
                  />
                </label>
              )}
              
            </div>

            <div className="-mt-16 relative z-10 flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-32 h-32 rounded-full border-4 border-slate-900 shadow-lg object-cover"
                />
                {LOGGED_IN_USER_ID === selectedMember.id && (
                  <label className="absolute bottom-2 right-2 bg-slate-700 hover:bg-slate-600 p-2 rounded-full cursor-pointer">
                    <Camera size={16}/>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpdate(e, 'image')}
                    />
                  </label>
                )}
              </div>
              <h2 className="mt-4 text-2xl font-bold">{selectedMember.name}</h2>
              <p className="text-blue-400">{selectedMember.role}</p>
              <p className="text-slate-400 max-w-lg mt-2">{selectedMember.bio}</p>
            </div>

            {LOGGED_IN_USER_ID === selectedMember.id && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsCreatingPost(true)}
                  className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-lg font-semibold flex items-center justify-center mx-auto gap-2 transition-colors"
                >
                  <Plus size={16} /> Create Post
                </button>
              </div>
            )}

            <div className="mt-8 max-w-2xl mx-auto space-y-6">
              <h3 className="text-xl font-bold">Activity Feed</h3>
              {sortedPosts.length > 0 ? (
                sortedPosts.map((p) => <PostCard 
                    key={p.id} 
                    post={p} 
                    author={selectedMember} 
                    onDelete={handleDeletePost}
                    isAuthor={LOGGED_IN_USER_ID === selectedMember.id}
                  />)
              ) : (
                <div className="text-center py-12 bg-slate-800/50 border border-slate-700 rounded-lg">
                  <ImageIcon className="mx-auto text-slate-500" size={40} />
                  <p className="text-slate-500 mt-2">No posts yet. Start by creating one!</p>
                </div>
              )}
            </div>
          </motion.div>
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

