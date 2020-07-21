import React, { FC } from "react"

import { AudioPlayerController as BasePlayerController } from "../../components/"

interface Props {
  currentTime?: number
}

const AudioPlayerController: FC<Props> = ({ currentTime }) => {
  return <BasePlayerController />
}

export default AudioPlayerController
