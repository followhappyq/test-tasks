import React, { FC } from "react"

import "./header.scss"

interface Props {}

const Header: FC = (props: Props) => {
  return (
    <header className="songbird__header">
      <div className="songbird__logo">SongBird</div>
      <div className="songbird__score">Score: 0</div>
    </header>
  )
}

export default Header
