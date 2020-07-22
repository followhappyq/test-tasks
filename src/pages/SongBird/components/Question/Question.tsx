import React, { FC } from "react"

import { AudioPlayer } from "../../containers"
import "./question.scss"
interface Props {
  imageSrc: string
  audioSrc: string
  name: string
}

const Question: FC<Props> = ({ imageSrc, audioSrc, name }) => {
  return (
    <div className="question">
      <img src=".\assets\songbird\img\bird.jpg" alt="bird" className="question__bird" />

      <div className="question__wrapper">
        <div className="question__name">{name}</div>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
    </div>
  )
}

export default Question
