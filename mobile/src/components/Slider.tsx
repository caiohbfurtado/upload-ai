import Slider from '@react-native-community/slider'
import { View } from 'react-native'
import { Label } from './Label'
import colors from 'tailwindcss/colors'

type Props = {
  value: number
  onValueChange: (value: number) => void
}

export function SliderComponent({ value, onValueChange }: Props) {
  return (
    <View className="w-full my-6">
      <Label label="Temperatura" />

      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={colors.yellow[500]}
        maximumTrackTintColor={colors.zinc[600]}
        thumbTintColor={colors.yellow[500]}
      />
    </View>
  )
}
