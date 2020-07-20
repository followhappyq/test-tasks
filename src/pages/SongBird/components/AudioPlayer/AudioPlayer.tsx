import React, { FC, useRef, useState } from "react"

import { PlayerButton } from "../"

interface Props {}

const AudioPlayer: FC = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const audio = useRef<HTMLAudioElement>(null)
  console.log(audio.current?.duration)

  const onPlayClicked: (current: any) => void = ({ current }) => {
    if (isPlaying) {
      current.pause()
      setIsPlaying(false)
    } else {
      current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="audio-player">
      <audio
        src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
        ref={audio}
      />
      <PlayerButton onPlayClicked={onPlayClicked} audio={audio} isPlaying={isPlaying} />
    </div>
  )
}

export default AudioPlayer
