import { InputHTMLAttributes } from 'react'

import styles from './Avatar.module.css'


interface AvatarProps extends InputHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img 
      className={ hasBorder ? styles.avatarWithBorder : ''} 
      {...props}
    />
  )
}
