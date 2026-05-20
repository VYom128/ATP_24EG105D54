import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-[#0b0f19] border-t border-[#222b40] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tight">
              MyBlog
            </Link>
            <p className="mt-4 text-[#94a3b8] text-sm max-w-sm leading-relaxed">
              A premium space to share your thoughts, connect with like-minded individuals, and explore amazing content.
            </p>
          </div>
          <div>
            <h3 className="text-[#f8fafc] font-bold tracking-wider uppercase text-xs mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[#94a3b8] hover:text-indigo-400 text-sm transition-colors">Home</Link></li>
              <li><Link to="/login" className="text-[#94a3b8] hover:text-indigo-400 text-sm transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="text-[#94a3b8] hover:text-indigo-400 text-sm transition-colors">Create Account</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#f8fafc] font-bold tracking-wider uppercase text-xs mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#94a3b8] hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-indigo-400 text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer