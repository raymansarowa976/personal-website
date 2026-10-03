import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050f]">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Rayman Sarowa
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}