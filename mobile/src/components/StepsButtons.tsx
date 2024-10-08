import { View } from 'react-native'
import { ArrowLeft, ArrowRight } from 'lucide-react-native'

import { Button } from './Button'

type Props = {
  mainButtonPress: () => void
  additionalButtonPress?: () => void
}

export function StepsButtons({
  additionalButtonPress,
  mainButtonPress,
}: Props) {
  return (
    <View className="justify-between flex-row w-full my-6">
      {additionalButtonPress && (
        <View className="w-[45%]">
          <Button
            title="Voltar"
            leftIcon={ArrowLeft}
            onPress={additionalButtonPress}
          />
        </View>
      )}

      <View className={`w-[45%] ${!additionalButtonPress && 'w-full'}`}>
        <Button
          title="Próximo"
          rightIcon={ArrowRight}
          onPress={mainButtonPress}
        />
      </View>
    </View>
  )
}
