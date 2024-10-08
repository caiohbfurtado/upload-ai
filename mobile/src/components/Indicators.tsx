import { View } from 'react-native'

type Props = {
  current: number
}

export function Indicators({ current }: Props) {
  return (
    <View className="flex-row justify-between gap-2 m-4">
      {[0, 1, 2].map((_, index) => (
        <View
          key={String(index)}
          className={`h-2 w-28 bg-zinc-700 rounded-md ${
            current === index && 'bg-yellow-600'
          }`}
        />
      ))}
    </View>
  )
}
