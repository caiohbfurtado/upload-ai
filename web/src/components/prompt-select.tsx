import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { api } from '@/lib/axios'

type Prompt = {
  id: string
  title: string
  template: string
}

type Props = {
  onPromptSelected: (template: string) => void
}

export function PromptSelect({ onPromptSelected }: Props) {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null)

  useEffect(() => {
    api.get('/prompts').then((response) => {
      console.log(response)

      setPrompts(response.data)
    })
  }, [])

  function handlePrompmptSelected(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId)

    if (!selectedPrompt) {
      return
    }

    onPromptSelected(selectedPrompt.template)
  }

  return (
    <Select onValueChange={handlePrompmptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts &&
          prompts.map(({ id, title }) => (
            <SelectItem key={id} value={id}>
              {title}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}
