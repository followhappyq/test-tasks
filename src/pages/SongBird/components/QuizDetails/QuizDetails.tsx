import React from "react"

import "./quizDetails.scss"

interface Props {}

const quizDetailsData: Array<string> = [
  "Разминка",
  "Воробьиные",
  "Лесные птицы",
  "Певчие птицы",
  "Хищные птицы",
  "Морские птицы",
]

const QuizDetails = (props: Props) => {
  return (
    <div className="quiz-details">
      <ul className="quiz-details__list">
        {quizDetailsData.map((item) => (
          <li className="quiz-details__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuizDetails
