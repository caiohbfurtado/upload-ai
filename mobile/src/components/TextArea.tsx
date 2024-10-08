import { View, TextInput, TextInputProps } from 'react-native'
import { Typography } from './Typography'
import colors from 'tailwindcss/colors'
import { Label } from './Label'

type Props = TextInputProps & {
  label?: string
}

export function TextArea({ label, ...rest }: Props) {
  return (
    <View className="w-full">
      {label && <Label label={label} />}
      <TextInput
        multiline
        className="bg-transparent border rounded-md border-zinc-500 w-full h-28 p-4 text-base text-zinc-100"
        placeholderTextColor={colors.zinc[500]}
        {...rest}
      />
    </View>
  )
}
