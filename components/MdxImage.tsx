import Image from 'next/image'

interface MdxImageProps {
  src?: string
  alt?: string
}

export function MdxImage({ src = '', alt = '' }: MdxImageProps) {
  const imageSrc = src.startsWith('/') ? src : `/${src}`

  return (
    <span className="block relative my-4 aspect-video">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-contain"
      />
    </span>
  )
}