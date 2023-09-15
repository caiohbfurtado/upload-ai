import { ScrollView, View } from 'react-native'
import { Typography } from '../components/Typography'
import { Header } from '../components/Header'
import { TextArea } from '../components/TextArea'
import { Button } from '../components/Button'
import { FileVideo, Upload } from 'lucide-react-native'

export function Home() {
  return (
    <View className="flex-1 items-center bg-zinc-950 pt-16">
      <Header />

      <ScrollView
        style={{ padding: 24, paddingBottom: 150, width: '100%' }}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* cabeçalho */}
        <View className="mb-4">
          <Typography className="font-head text-2xl mb-1">Olá!</Typography>
          <Typography className="font-body text-base text-zinc-300">
            Seja bem vindo ao upload.ai, a inteligência artificial que te ajuda
            a criar conteúdos!
          </Typography>
        </View>

        {/* upload do vídeo */}
        <View className="bg-transparent items-center justify-center border border-zinc-500 rounded-md aspect-video w-full mb-4">
          <FileVideo className="w-4 h-4 color-zinc-500 mb-2" />
          <Typography className="text-zinc-500">Selecione um vídeo</Typography>
        </View>

        <TextArea
          label="Prompt de transcrição"
          placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
        />

        <Button title="Carregar vídeo" className="mt-6" icon={Upload} />
      </ScrollView>
    </View>
  )
}
