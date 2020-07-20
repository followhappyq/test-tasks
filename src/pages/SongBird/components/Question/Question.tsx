import React from "react"

import { AudioPlayer } from "../../containers"
import "./question.scss"
interface Props {}

const Question = (props: Props) => {
  return (
    <div className="question">
      <img
        src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
        alt="bird"
        className="question__bird"
      />
      <div className="question__wrapper">
        <div className="question__name">Ворон</div>
        <AudioPlayer />
      </div>
    </div>
  )
}

export default Question
