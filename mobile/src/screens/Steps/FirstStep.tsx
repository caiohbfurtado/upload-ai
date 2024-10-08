import { useRef } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Video, ResizeMode } from 'expo-av'
import { FileVideo, Upload } from 'lucide-react-native'

import { Typography } from '../../components/Typography'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { StepsButtons } from '../../components/StepsButtons'

type Props = {
  video: ImagePicker.ImagePickerAsset | null
  onChangeVideo: (video: ImagePicker.ImagePickerAsset) => void
  onNextStep: (step: number) => void
}

export function FirstStep({ video, onChangeVideo, onNextStep }: Props) {
  const videoRef = useRef<Video>(null)
  const { width } = useWindowDimensions()

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const videoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (videoSelected.canceled) {
      return
    }

    onChangeVideo(videoSelected.assets[0])
  }

  return (
    <ScrollView
      style={{ width }}
      contentContainerStyle={{ paddingBottom: 80, padding: 24 }}
    >
      <View className="mb-4">
        <Typography className="font-head text-2xl mb-1">Olá!</Typography>
        <Typography className="font-body text-base text-zinc-300">
          Seja bem vindo ao upload.ai, a inteligência artificial que te ajuda a
          criar conteúdos!
        </Typography>
      </View>

      <TouchableOpacity
        className={`bg-transparent items-center justify-center border border-zinc-500 rounded-md aspect-video w-full mb-4 ${
          video && 'border-0'
        }`}
        onPress={pickImage}
      >
        {video && (
          <Video
            ref={videoRef}
            source={{ uri: video.uri }}
            resizeMode={ResizeMode.CONTAIN}
            className="h-full w-full bg-yellow-500 aspect-video absolute inset-0 pointer-events-none z-50 rounded-md"
          />
        )}

        <FileVideo className="w-4 h-4 color-zinc-500 mb-2" />
        <Typography className="text-zinc-500">Selecione um vídeo</Typography>
      </TouchableOpacity>

      <TextArea
        label="Prompt de transcrição"
        placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
      />

      <Button title="Carregar vídeo" className="mt-6" leftIcon={Upload} />
      <StepsButtons mainButtonPress={() => onNextStep(1)} />
    </ScrollView>
  )
}
