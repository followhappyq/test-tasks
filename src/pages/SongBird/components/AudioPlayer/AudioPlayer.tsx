import React, { FC } from "react"

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
      <audio controls ref={audio}>
        <source src={audioSrc} type="audio/ogg" />
      </audio>
    </div>
  )
}

export default AudioPlayer
