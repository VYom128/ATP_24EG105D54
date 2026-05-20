// src/styles/common.js
// Theme-aware: uses CSS variables defined in index.css
// Dark mode = :root defaults | Light mode = [data-theme="light"] overrides

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[var(--bg)] min-h-screen text-[var(--text-primary)] transition-colors duration-200";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[var(--surface)] rounded-2xl p-7 border border-[var(--border)] hover:border-[var(--border-hover)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-none mb-2";
export const headingClass = "text-2xl font-bold text-[var(--text-primary)] tracking-tight";
export const subHeadingClass = "text-lg font-semibold text-[var(--text-primary)] tracking-tight";
export const bodyText = "text-[var(--text-secondary)] leading-relaxed";
export const mutedText = "text-sm text-[var(--text-muted)]";
export const linkClass = "text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[var(--accent)] text-white font-semibold px-5 py-2.5 rounded-full hover:opacity-90 shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-sm tracking-wide";
export const secondaryBtn =
  "border border-[var(--border)] text-[var(--text-secondary)] font-medium px-5 py-2.5 rounded-full hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] transition-all duration-200 cursor-pointer text-sm";
export const ghostBtn = "text-[var(--accent-light)] font-medium hover:opacity-80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 max-w-4xl mx-auto shadow-lg";
export const formTitle = "text-3xl font-extrabold text-[var(--text-primary)] tracking-tight text-center mb-8";
export const labelClass = "text-xs font-semibold text-[var(--text-secondary)] mb-1.5 block uppercase tracking-wider";
export const inputClass =
  "w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-faint)] transition-all duration-200";
export const formGroup = "mb-5";
export const submitBtn =
  "w-full bg-[var(--accent)] text-white font-bold py-3.5 rounded-xl hover:opacity-90 shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer mt-4 text-sm tracking-wide";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-[var(--bg)] border-b border-[var(--border)] px-8 h-[70px] flex items-center sticky top-0 z-50 transition-colors duration-200 backdrop-blur-md";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-xl font-black text-[var(--accent)] tracking-tight";
export const navLinksClass = "flex items-center gap-8";
export const navLinkClass = "text-[0.85rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors";
export const navLinkActiveClass = "text-[0.85rem] font-bold text-[var(--accent)]";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8";
export const articleCardClass =
  "bg-[var(--surface)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 cursor-pointer group";
export const articleTitle = "text-lg font-bold text-[var(--text-primary)] leading-snug tracking-tight transition-colors";
export const articleExcerpt = "text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3";
export const articleMeta = "text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold";
export const articleBody = "text-[var(--text-secondary)] leading-[1.85] text-[0.95rem] max-w-2xl";
export const timestampClass = "text-xs text-[var(--text-muted)] flex items-center gap-1.5";
export const tagClass = "text-[0.7rem] font-bold text-[var(--accent)] bg-[var(--accent-faint)] px-2.5 py-1 rounded-md uppercase tracking-widest w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";
export const articleHeader = "mb-12 flex flex-col gap-5";
export const articleCategory = "text-[0.75rem] font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-faint)] px-3 py-1 rounded-full w-fit";
export const articleMainTitle = "text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[var(--border)] py-5 mt-6 text-sm text-[var(--text-secondary)]";
export const authorInfo = "flex items-center gap-3 font-semibold text-[var(--text-primary)]";
export const articleContent = "text-[var(--text-secondary)] leading-[1.9] text-[1.05rem] whitespace-pre-line mt-10";
export const articleFooter = "border-t border-[var(--border)] mt-16 pt-8 text-sm text-[var(--text-muted)]";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-4 mt-8";
export const editBtn = "bg-[var(--accent-faint)] text-[var(--accent)] border border-[var(--accent-faint)] text-sm font-medium px-5 py-2 rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-200";
export const deleteBtn = "bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-medium px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
export const articleStatusDeleted =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl px-5 py-4 text-sm font-medium flex items-center shadow-sm";
export const successClass =
  "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl px-5 py-4 text-sm font-medium flex items-center shadow-sm";
export const loadingClass = "text-[var(--accent)] text-sm font-medium animate-pulse text-center py-12";
export const emptyStateClass = "text-center text-[var(--text-muted)] py-20 text-base font-medium bg-[var(--surface)] rounded-2xl border border-[var(--border)] border-dashed";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-16 flex flex-col gap-6";
export const commentCard = "bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-all duration-300 hover:border-[var(--border-hover)] shadow-sm";
export const commentHeader = "flex items-center justify-between mb-3";
export const commentUser = "text-sm font-bold text-[var(--text-primary)]";
export const commentTime = "text-xs text-[var(--text-muted)] font-medium";
export const commentText = "text-[var(--text-secondary)] text-sm leading-relaxed mt-2";
export const avatar =
  "w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-bold shadow-sm";
export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-[var(--border)] my-12";