import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    // Simple validation for demonstration
    if (email && password) {
      try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password }

        );
        if(response?.data.token){
          localStorage.setItem("token", response.data.token);
          navigate("/members/post");
        }
      
        console.log("Login Successful:", response);
      } catch (error) {
        console.error("Login Failed:", error);
        alert("Login Failed. Please check your credentials.");
        
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-100/50">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-8 h-8 border-2 border-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-5 right-0 w-5 h-5 bg-green-300 rounded-sm animate-pulse delay-500"></div>
            <div className="absolute top-10 right-5 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-10 left-5 w-4 h-4 border-2 border-green-300"></div>

            {/* Main Graphic */}
            <div className="relative w-56 h-56 bg-white rounded-full shadow-inner flex items-center justify-center">
              <svg
                className="w-28 h-28 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Members Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-gray-100 border-2 border-transparent rounded-full py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              />
            </div>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-gray-100 border-2 border-transparent rounded-full py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                LOGIN
              </button>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-500 "> Forgot Password?</span>{" "}
              <Link className="text-sm text-gray-500 hover:underline">Send reset link</Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
