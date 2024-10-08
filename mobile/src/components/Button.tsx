import { Pressable, PressableProps } from 'react-native'
import { Typography } from './Typography'
import { LucideIcon } from 'lucide-react-native'

type Props = PressableProps & {
  title: string
  titleClassname?: string
  rightIcon?: LucideIcon
  leftIcon?: LucideIcon
}

export function Button({
  title,
  titleClassname,
  className,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  ...rest
}: Props) {
  return (
    <Pressable
      className={`flex-row h-14 w-full bg-yellow-500 items-center justify-center rounded-md active:opacity-80 ${className}`}
      {...rest}
    >
      {LeftIcon && <LeftIcon className="mr-2 text-zinc-900" size={24} />}
      <Typography
        className={`font-head text-lg text-zinc-900 ${titleClassname}`}
      >
        {title}
      </Typography>
      {RightIcon && <RightIcon className="ml-2 text-zinc-900" size={24} />}
    </Pressable>
  )
}
