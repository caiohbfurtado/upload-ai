import { View } from 'react-native'
import { Typography } from './Typography'
import React from 'react'

export function Header() {
  return (
    <View className="w-full items-center justify-center pb-4 border-b-[0.25px] border-b-zinc-50">
      <Typography className="text-3xl font-head">upload.ai</Typography>
    </View>
  )
}
