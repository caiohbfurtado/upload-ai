import { useRef, useState } from 'react'
import { FlatList, View, ViewToken } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import { Header } from '../components/Header'
import { Indicators } from '../components/Indicators'

import { FirstStep } from './Steps/FirstStep'
import { SecondStep } from './Steps/SecondStep'

export function Home() {
  const [prompt, setPrompt] = useState('')
  const [temperature, setTemperature] = useState(0.5)
  const [inViewPort, setInViewPort] = useState(0)
  const [video, setVideo] = useState<ImagePicker.ImagePickerAsset | null>(null)
  const flatListRef = useRef<FlatList>(null)
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 5,
  })

  const onViewableItemsChanged = useRef(
    ({ changed }: { changed: ViewToken[] }) => {
      if (changed && changed.length > 0) {
        setInViewPort(changed[0]?.index ?? 1)
      }
    },
  )

  function handleSubmitAndChangeStep(step: number) {
    setInViewPort(step)

    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: step,
    })
  }

  return (
    <View className="flex-1 items-center bg-zinc-950 pt-16">
      <Header />
      <Indicators current={inViewPort} />

      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        nestedScrollEnabled
        scrollEnabled={false}
        data={[0, 1]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          if (item === 0) {
            return (
              <FirstStep
                video={video}
                onChangeVideo={setVideo}
                onNextStep={handleSubmitAndChangeStep}
              />
            )
          }
          return (
            <SecondStep
              prompt={prompt}
              onChangePrompt={setPrompt}
              temperature={temperature}
              onChangeTemperature={setTemperature}
              onNextStep={handleSubmitAndChangeStep}
              onPreviousStep={handleSubmitAndChangeStep}
            />
          )
        }}
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}
