import React, { useRef, useState, FC } from "react"
import { AudioPlayer as BaseAudioPlayer } from "../../components"

interface Props {
  audioSrc: string
}

const AudioPlayer: FC<Props> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const audio = useRef<HTMLAudioElement>(null)

  const onPlayClicked: (current: any) => void = ({ current }) => {
    if (isPlaying) {
      current.pause()
      setIsPlaying(false)
    } else {
      current.play()
      setIsPlaying(true)
    }
  }

  return <BaseAudioPlayer isPlaying={isPlaying} onPlayClicked={onPlayClicked} audio={audio} audioSrc={audioSrc} />
}

export default AudioPlayer
