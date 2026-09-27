import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import type { IconType } from 'react-icons'

const links: {
  href: string
  label: string
  Icon: IconType
  colorClassName: string
}[] = [
  {
    href: 'https://github.com/raymansarowa976',
    label: 'GitHub',
    Icon: FaGithub,
    colorClassName: 'bg-[#181717] hover:bg-black',
  },
  {
    href: 'https://www.linkedin.com/in/rayman-sarowa/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
    colorClassName: 'bg-[#0A66C2] hover:bg-[#004182]',
  },
  {
    href: 'mailto:raymansarowa1@gmail.com',
    label: 'Email',
    Icon: HiOutlineMail,
    colorClassName: 'bg-[#EA4335] hover:bg-[#c5221f]',
  },
]

const sizeClassNames = {
  md: { button: 'w-9 h-9', icon: 'w-4 h-4' },
  lg: { button: 'w-12 h-12', icon: 'w-5 h-5' },
}

export function SocialLinks({
  className = '',
  size = 'md',
}: {
  className?: string
  size?: keyof typeof sizeClassNames
}) {
  const { button: buttonSize, icon: iconSize } = sizeClassNames[size]
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon, colorClassName }) => {
        const isExternal = !href.startsWith('mailto:')
        return (
          <a
            key={label}
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className={`flex items-center justify-center rounded-full text-white transition-colors ${buttonSize} ${colorClassName}`}
          >
            <Icon className={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
