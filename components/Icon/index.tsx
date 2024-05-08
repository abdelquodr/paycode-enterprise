import Image from 'next/image'
import { FC } from 'react';


type IconType = {
    src: string,
    size?: number,
    className?: string
}

const Icon: FC<IconType> = (props) => {

  const { src, size=30, className } = props;
  return (
    <span className={` ${className}`}>
      <Image className='inline pr-1 align-middle pb-1' src={`../assets/icons/${src}.svg`} width={ size } height={size} alt={`${src}`} />
    </span>
  )
}

export default Icon