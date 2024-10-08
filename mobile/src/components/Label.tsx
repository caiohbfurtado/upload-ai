import { TextProps } from 'react-native'
import { Typography } from './Typography'

type Props = TextProps & {
  label: string
}

export function Label({ label, className, ...rest }: Props) {
  return (
    <Typography className={`text-zinc-300 mb-2 ${className}`} {...rest}>
      {label}
    </Typography>
  )
}
