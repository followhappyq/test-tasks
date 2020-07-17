import React, { FC } from "react"

import { Header, QuizDetails, Question } from "./containers"
import "./style.scss"

interface Props {}

const SongBird: FC = (props: Props) => {
  return (
    <div className="songbird">
      <Header />
      <QuizDetails />
      <Question />
    </div>
  )
}

export default SongBird
