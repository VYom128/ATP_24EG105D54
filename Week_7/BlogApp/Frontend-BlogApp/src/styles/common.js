// src/styles/common.js
// Theme: Claude Aesthetic — Light (Cream/Beige) & Dark (Charcoal/Brownish)
// Utilizes CSS variables defined in index.css

// ─── Layout ───────────────────────────────────────────
// pageBackground is mostly handled by body in index.css, but we keep this for structure
export const pageBackground = "min-h-screen text-text-claude transition-colors duration-300";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-surface-claude rounded-2xl p-7 border border-border-claude shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "font-serif text-5xl font-bold text-text-claude tracking-tight leading-none mb-2";
export const headingClass = "font-serif text-2xl font-bold text-text-claude tracking-tight";
export const subHeadingClass = "font-serif text-lg font-semibold text-text-claude tracking-tight";
export const bodyText = "text-text-muted leading-relaxed font-sans";
export const mutedText = "text-sm text-text-muted font-sans";
export const linkClass = "text-accent-claude hover:text-accent-hover transition-colors font-sans";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-btn-primary text-btn-primary-text font-medium px-5 py-2.5 rounded-lg hover:bg-btn-primary-hover shadow-sm transition-all duration-200 cursor-pointer text-sm tracking-wide";
export const secondaryBtn =
  "bg-btn-secondary text-btn-secondary-text border border-border-claude font-medium px-5 py-2.5 rounded-lg hover:bg-btn-secondary-hover transition-all duration-200 cursor-pointer text-sm";
export const ghostBtn = "text-text-muted font-medium hover:text-text-claude transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-surface-claude border border-border-claude rounded-2xl p-10 max-w-4xl mx-auto shadow-md";
export const formTitle = "font-serif text-3xl font-bold text-text-claude tracking-tight text-center mb-8";
export const labelClass = "text-xs font-semibold text-text-muted mb-1.5 block tracking-wide";
export const inputClass =
  "w-full bg-transparent border border-border-claude rounded-lg px-4 py-3 text-text-claude text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-claude focus:ring-1 focus:ring-accent-claude transition-all duration-200";
export const formGroup = "mb-5";
export const submitBtn =
  "w-full bg-btn-primary text-btn-primary-text font-medium py-3.5 rounded-lg hover:bg-btn-primary-hover shadow-sm transition-all duration-200 cursor-pointer mt-4 text-sm tracking-wide";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-bg-claude/90 backdrop-blur-md border-b border-border-claude px-8 h-[70px] flex items-center sticky top-0 z-50 transition-colors duration-300";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "font-serif text-xl font-bold text-text-claude tracking-tight flex items-center gap-2";
export const navLinksClass = "flex items-center gap-8";
export const navLinkClass = "text-[0.9rem] font-medium text-text-muted hover:text-text-claude transition-colors";
export const navLinkActiveClass = "text-[0.9rem] font-semibold text-text-claude";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8";
export const articleCardClass =
  "bg-surface-claude p-8 rounded-2xl border border-border-claude hover:border-text-muted/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 cursor-pointer group";
export const articleTitle = "font-serif text-xl font-bold text-text-claude leading-snug tracking-tight transition-colors";
export const articleExcerpt = "text-sm text-text-muted leading-relaxed line-clamp-3 font-sans";
export const articleMeta = "text-xs text-text-muted uppercase tracking-wider font-semibold";
export const articleBody = "text-text-claude leading-[1.85] text-[1.05rem] max-w-2xl font-sans";
export const timestampClass = "text-xs text-text-muted flex items-center gap-1.5 font-sans";
export const tagClass = "text-[0.7rem] font-semibold text-text-muted bg-border-claude/50 px-2.5 py-1 rounded border border-border-claude uppercase tracking-widest w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";
export const articleHeader = "mb-10 flex flex-col gap-4";
export const articleCategory = "text-[0.75rem] font-semibold uppercase tracking-widest text-text-muted border border-border-claude px-3 py-1 rounded w-fit";
export const articleMainTitle = "font-serif text-4xl sm:text-5xl font-bold text-text-claude leading-[1.1] tracking-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-border-claude py-4 mt-6 text-sm text-text-muted";
export const authorInfo = "flex items-center gap-3 font-medium text-text-claude";
export const articleContent = "font-sans text-text-claude leading-[1.8] text-[1.05rem] whitespace-pre-line mt-8";
export const articleFooter = "border-t border-border-claude mt-16 pt-8 text-sm text-text-muted";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-4 mt-8";
export const editBtn = "bg-btn-secondary text-btn-secondary-text border border-border-claude text-sm font-medium px-5 py-2 rounded-lg hover:bg-btn-secondary-hover transition-all duration-200";
export const deleteBtn = "bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20";
export const articleStatusDeleted =
  "absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 rounded-lg px-5 py-4 text-sm font-medium flex items-center";
export const successClass =
  "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 rounded-lg px-5 py-4 text-sm font-medium flex items-center";
export const loadingClass = "text-text-muted text-sm font-medium animate-pulse text-center py-12";
export const emptyStateClass = "text-center text-text-muted py-20 text-base font-medium bg-surface-claude rounded-xl border border-border-claude border-dashed";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-16 flex flex-col gap-6";
export const commentCard = "bg-surface-claude border border-border-claude rounded-xl p-6 transition-all duration-300";
export const commentHeader = "flex items-center justify-between mb-3";
export const commentUser = "text-sm font-bold text-text-claude";
export const commentTime = "text-xs text-text-muted font-medium";
export const commentText = "text-text-muted text-sm leading-relaxed mt-2";
export const avatar =
  "w-10 h-10 rounded-full bg-accent-claude text-accent-text flex items-center justify-center text-sm font-bold";
export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-border-claude my-12";