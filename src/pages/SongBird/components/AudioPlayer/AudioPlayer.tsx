import React, { FC } from "react"

import { PlayerButton } from "../"
import "./audioPlayer.scss"

interface Props {
  isPlaying: boolean
  onPlayClicked: (current: any) => void
  audio: any
  audioSrc: string
}

const AudioPlayer: FC<Props> = ({ audio, isPlaying, onPlayClicked, audioSrc }) => {
  return (
    <div className="audio-player">
      <audio src={audioSrc} ref={audio} />
      <PlayerButton onPlayClicked={onPlayClicked} audio={audio} isPlaying={isPlaying} />
    </div>
  )
}

export default AudioPlayer
