import { ScrollView, useWindowDimensions } from 'react-native'
import { Typography } from '../../components/Typography'
import { StepsButtons } from '../../components/StepsButtons'
import { Select } from '../../components/Select'
import { SliderComponent } from '../../components/Slider'

type Props = {
  onNextStep: (step: number) => void
  onPreviousStep: (step: number) => void
  prompt: string
  temperature: number
}

export function ThirdStep({
  onNextStep,
  onPreviousStep,
  prompt,
  temperature,
}: Props) {
  const { width } = useWindowDimensions()

  return (
    <ScrollView
      style={{ width }}
      contentContainerStyle={{
        paddingBottom: 80,
        padding: 24,
      }}
    >
      <Select
        label="Prompt"
        onValueChange={(value) => onChangePrompt(value)}
        options={[
          { label: 'Descrição para o Youtube', value: 'descrição' },
          { label: 'Título para o Youtube', value: 'título' },
        ]}
        selected={prompt}
      />

      <Select
        label="Modelo"
        selected="gpt3.5"
        options={[{ label: 'GPT 3.5-turbo 16k', value: 'gpt3.5' }]}
        disabled
      />
      <Typography className="text-zinc-500 mt-[-12px] text-md">
        Você poderá customizar essa opção em breve
      </Typography>

      <SliderComponent
        value={temperature}
        onValueChange={onChangeTemperature}
      />
      <Typography className="text-zinc-500 mt-[-12px]">
        Valores mais altos tendem a deixar o resultado mais criativo e com
        possíveis erros
      </Typography>
      <StepsButtons
        mainButtonPress={() => onNextStep(2)}
        additionalButtonPress={() => onPreviousStep(0)}
      />
    </ScrollView>
  )
}
