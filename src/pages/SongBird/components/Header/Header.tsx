import React, { FC } from "react"

import "./header.scss"

interface Props {
  score: number
}

const Header: FC<Props> = ({ score }) => {
  return (
    <header className="songbird__header">
      <div className="songbird__logo">SongBird</div>
      <div className="songbird__score">Score: {score}</div>
    </header>
  )
}

export default Header
