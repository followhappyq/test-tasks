import React from "react"
import { Switch, Route } from "react-router-dom"

import { Home, FutureGroup, SongBirdContainer as SongBird } from "./pages/"

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path={["/"]} component={Home} />
        <Route exact path={["/future-group"]} component={FutureGroup} />
        <Route exact path={["/songbird"]} component={SongBird} />
      </Switch>
    </div>
  )
}

export default App
