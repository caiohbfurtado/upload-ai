import { Text, TextProps } from 'react-native'

type Props = TextProps

export function Typography({ className, children, ...rest }: Props) {
  return (
    <Text
      className={`font-body text-zinc-100 text-base ${className}`}
      {...rest}
    >
      {children}
    </Text>
  )
}
