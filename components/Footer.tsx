export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050f]">
      <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Rayman Sarowa
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/raymansarowa976"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rayman-sarowa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:raymansarowa1@gmail.com"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}