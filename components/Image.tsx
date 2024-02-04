import NextImage, { ImageProps } from 'next/image'
import { basePath, isProd } from '@/data/constants'

const Image = ({ src, ...rest }: ImageProps) => {
  if (isProd) {
    src = basePath + src
  }
  return <NextImage src={`${src}`} {...rest} />
}

export default Image
