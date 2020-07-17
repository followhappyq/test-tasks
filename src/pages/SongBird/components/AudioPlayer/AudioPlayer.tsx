import React from "react"

interface Props {}

const AudioPlayer = (props: Props) => {
  return (
    <div className="audio-player">
      <audio src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3" />
      <button className="play">play</button>
    </div>
  )
}

export default AudioPlayer
