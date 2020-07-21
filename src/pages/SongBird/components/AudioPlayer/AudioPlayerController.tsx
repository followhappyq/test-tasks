import React, { FC } from "react"

interface Props {}

const AudioPlayerController: FC<Props> = () => {
  return <input type="range" min="0" max="10" defaultValue="0" step="0.1" />
}

export default AudioPlayerController
