import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  id: number
  name: string
  handleClick: (id: number) => void
  wrong: boolean | undefined
  success: boolean | undefined
}

const AnswerOptionsItem: FC<Props> = ({ id, name, handleClick, wrong, success }) => {
  return (
    <li className="questions__item" onClick={handleClick.bind(null, id)}>
      <span
        className={classNames("questions__circle", { questions__error: wrong, questions__success: success })}
      ></span>
      {name}
    </li>
  )
}

export default AnswerOptionsItem
