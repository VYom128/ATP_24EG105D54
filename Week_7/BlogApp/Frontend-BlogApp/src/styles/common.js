// src/styles/common.js
// Theme: Aesthetic Midnight — #0b0f19 background, #f8fafc text, #6366f1 (Indigo) accent
// Inspired by premium modern dark mode designs.

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[#0b0f19] min-h-screen text-[#f8fafc]";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[#151a2a] rounded-2xl p-7 border border-[#222b40] hover:border-[#334155] shadow-lg shadow-black/20 hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tight leading-none mb-2";
export const headingClass = "text-2xl font-bold text-[#f8fafc] tracking-tight";
export const subHeadingClass = "text-lg font-semibold text-[#f8fafc] tracking-tight";
export const bodyText = "text-[#94a3b8] leading-relaxed";
export const mutedText = "text-sm text-[#64748b]";
export const linkClass = "text-[#818cf8] hover:text-[#a5b4fc] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold px-5 py-2.5 rounded-full hover:from-indigo-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-sm tracking-wide";
export const secondaryBtn =
  "border border-[#334155] text-[#cbd5e1] font-medium px-5 py-2.5 rounded-full hover:bg-[#1e293b] hover:text-white transition-all duration-200 cursor-pointer text-sm";
export const ghostBtn = "text-[#818cf8] font-medium hover:text-[#a5b4fc] hover:bg-indigo-500/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-[#151a2a]/80 backdrop-blur-xl border border-[#222b40] rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl shadow-black/40";
export const formTitle = "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight text-center mb-8";
export const labelClass = "text-xs font-semibold text-[#94a3b8] mb-1.5 block uppercase tracking-wider";
export const inputClass =
  "w-full bg-[#0b0f19] border border-[#222b40] rounded-xl px-4 py-3 text-[#f8fafc] text-sm placeholder:text-[#475569] focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-200";
export const formGroup = "mb-5";
export const submitBtn =
  "w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-3.5 rounded-xl hover:from-indigo-400 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer mt-4 text-sm tracking-wide";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-[#0b0f19]/80 backdrop-blur-2xl border-b border-[#222b40] px-8 h-[70px] flex items-center sticky top-0 z-50 shadow-sm shadow-black/10";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tight";
export const navLinksClass = "flex items-center gap-8";
export const navLinkClass = "text-[0.85rem] font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors";
export const navLinkActiveClass = "text-[0.85rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8";
export const articleCardClass =
  "bg-[#151a2a] p-8 rounded-2xl border border-[#222b40] hover:border-indigo-500/50 hover:bg-[#181e2e] shadow-lg shadow-black/20 hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 cursor-pointer group";
export const articleTitle = "text-lg font-bold text-[#f8fafc] leading-snug tracking-tight group-hover:text-indigo-400 transition-colors";
export const articleExcerpt = "text-sm text-[#94a3b8] leading-relaxed line-clamp-3";
export const articleMeta = "text-xs text-[#64748b]";
export const articleBody = "text-[#cbd5e1] leading-[1.85] text-[0.95rem] max-w-2xl";
export const timestampClass = "text-xs text-[#64748b] flex items-center gap-1.5";
export const tagClass = "text-[0.7rem] font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md uppercase tracking-widest w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";
export const articleHeader = "mb-12 flex flex-col gap-5";
export const articleCategory = "text-[0.75rem] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit";
export const articleMainTitle = "text-4xl sm:text-5xl font-extrabold text-[#f8fafc] leading-tight tracking-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[#222b40] py-5 mt-6 text-sm text-[#94a3b8]";
export const authorInfo = "flex items-center gap-3 font-semibold text-[#e2e8f0]";
export const articleContent = "text-[#cbd5e1] leading-[1.9] text-[1.05rem] whitespace-pre-line mt-10";
export const articleFooter = "border-t border-[#222b40] mt-16 pt-8 text-sm text-[#64748b]";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-4 mt-8";
export const editBtn = "bg-indigo-600/20 text-indigo-400 border border-indigo-600/30 text-sm font-medium px-5 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200";
export const deleteBtn = "bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-medium px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
export const articleStatusDeleted =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl px-5 py-4 text-sm font-medium flex items-center shadow-lg shadow-red-500/5";
export const successClass =
  "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl px-5 py-4 text-sm font-medium flex items-center shadow-lg shadow-emerald-500/5";
export const loadingClass = "text-indigo-400 text-sm font-medium animate-pulse text-center py-12";
export const emptyStateClass = "text-center text-[#64748b] py-20 text-base font-medium bg-[#151a2a] rounded-2xl border border-[#222b40] border-dashed";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-16 flex flex-col gap-6";
export const commentCard = "bg-[#151a2a] border border-[#222b40] rounded-2xl p-6 transition-all duration-300 hover:border-[#334155] shadow-md";
export const commentHeader = "flex items-center justify-between mb-3";
export const commentUser = "text-sm font-bold text-[#e2e8f0]";
export const commentTime = "text-xs text-[#64748b] font-medium";
export const commentText = "text-[#94a3b8] text-sm leading-relaxed mt-2";
export const avatar =
  "w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold shadow-md";
export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-[#222b40] my-12";