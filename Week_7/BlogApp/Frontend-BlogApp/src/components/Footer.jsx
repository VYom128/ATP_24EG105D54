import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer
      className="border-t mt-auto transition-colors duration-200"
      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              MyBlog
            </Link>
            <p
              className="mt-4 text-sm max-w-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              A premium space to share your thoughts, connect with like-minded
              individuals, and explore amazing content.
            </p>
          </div>

          <div>
            <h3
              className="font-bold tracking-wider uppercase text-xs mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/"        className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>Home</Link></li>
              <li><Link to="/login"   className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>Sign In</Link></li>
              <li><Link to="/register" className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>Create Account</Link></li>
            </ul>
          </div>

        </div>

        <div
          className="mt-10 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer