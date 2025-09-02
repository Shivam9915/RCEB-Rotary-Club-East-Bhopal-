import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, PlusCircle, Reply, UserCircle2, Tag, X } from "lucide-react";
import Footer from "../components/Footer";

// --- Mock Forum Data ---
const discussionsData = [
  {
    id: 1,
    title: "Ideas for Upcoming Charity Drive",
    author: "Rtn. Anjali Verma",
    date: "2025-08-22",
    tags: ["Charity", "Fundraising"],
    replies: 12,
    comments: [],
  },
  {
    id: 2,
    title: "Suggestions for Rotary Youth Program",
    author: "Rtn. Rajesh Sharma",
    date: "2025-08-15",
    tags: ["Youth", "Education"],
    replies: 8,
    comments: [],
  },
  {
    id: 3,
    title: "Best Practices for Community Projects",
    author: "Rtn. Priya Mehta",
    date: "2025-08-10",
    tags: ["Community", "Impact"],
    replies: 20,
    comments: [],
  },
];

const MemberForumPage = () => {
  const [discussions, setDiscussions] = useState(discussionsData);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    author: "",
    tags: "",
  });

  // --- Reply submit ---
  const handleReplySubmit = (id) => {
    if (!replyText.trim()) return;

    setDiscussions((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, replyText],
              replies: post.replies + 1,
            }
          : post
      )
    );

    setReplyText("");
    setReplyingTo(null);
  };

  // --- New Discussion submit ---
  const handleNewDiscussionSubmit = (e) => {
    e.preventDefault();
    if (!newDiscussion.title || !newDiscussion.author) return;

    const newPost = {
      id: discussions.length + 1,
      title: newDiscussion.title,
      author: newDiscussion.author,
      date: new Date().toISOString().split("T")[0],
      tags: newDiscussion.tags
        ? newDiscussion.tags.split(",").map((t) => t.trim())
        : [],
      replies: 0,
      comments: [],
    };

    setDiscussions([newPost, ...discussions]);
    setNewDiscussion({ title: "", author: "", tags: "" });
    setShowNewDiscussion(false);
  };

  return (
<>
    <div className="bg-slate-900 min-h-screen font-sans text-white p-8 flex flex-col items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, #1e293b 0%, #0f172a 50%, #020617 100%)",
        }}
      ></div>

      <div className="w-full max-w-5xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block bg-slate-800/50 rounded-full p-3 border border-slate-700 mb-4">
            <MessageSquare className="text-emerald-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Member Forum / Discussion Board
          </h1>
          <p className="text-slate-400 text-lg">
            Share ideas, discuss projects, and connect with fellow Rotarians.
          </p>
        </motion.div>

        {/* New Discussion Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowNewDiscussion(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <PlusCircle size={18} />
            <span>New Discussion</span>
          </button>
        </div>

        {/* Discussions List */}
        <div className="space-y-6">
          {discussions.map((post, idx) => (
            <motion.div
              key={post.id}
              className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 flex flex-col gap-4 hover:bg-slate-800/90 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Author + Title */}
              <div className="flex items-center gap-3">
                <UserCircle2 className="text-cyan-400" size={36} />
                <div>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-slate-400 text-sm">
                    {post.author} • {post.date}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-xs bg-slate-700/60 text-cyan-400 px-3 py-1 rounded-full border border-slate-600"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  {post.replies} replies
                </span>
                <button
                  className="flex items-center gap-2 text-sm bg-slate-700 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg transition-colors duration-300"
                  onClick={() =>
                    setReplyingTo(replyingTo === post.id ? null : post.id)
                  }
                >
                  <Reply size={14} />
                  <span>Reply</span>
                </button>
              </div>

              {/* Reply Box */}
              {replyingTo === post.id && (
                <div className="mt-3">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write your reply..."
                    className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                  />
                  <div className="flex justify-end mt-2 gap-2">
                    <button
                      className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500"
                      onClick={() => setReplyingTo(null)}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500"
                      onClick={() => handleReplySubmit(post.id)}
                    >
                      Post Reply
                    </button>
                  </div>
                </div>
              )}

              {/* Comments Display */}
              {post.comments.length > 0 && (
                <div className="mt-4 pl-10 border-l-2 border-slate-600 space-y-2">
                  {post.comments.map((c, i) => (
                    <p
                      key={i}
                      className="text-slate-300 text-sm bg-slate-700/50 p-2 rounded-lg"
                    >
                      💬 {c}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- New Discussion Modal --- */}
      {showNewDiscussion && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl border border-slate-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-emerald-400">
                Start a New Discussion
              </h2>
              <button
                onClick={() => setShowNewDiscussion(false)}
                className="text-slate-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleNewDiscussionSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Discussion Title"
                className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                value={newDiscussion.title}
                onChange={(e) =>
                  setNewDiscussion({ ...newDiscussion, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                value={newDiscussion.author}
                onChange={(e) =>
                  setNewDiscussion({ ...newDiscussion, author: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Tags (comma separated)"
                className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                value={newDiscussion.tags}
                onChange={(e) =>
                  setNewDiscussion({ ...newDiscussion, tags: e.target.value })
                }
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500"
                  onClick={() => setShowNewDiscussion(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500"
                >
                  Post Discussion
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>

    <Footer/>


</>
  );
};

export default MemberForumPage;
