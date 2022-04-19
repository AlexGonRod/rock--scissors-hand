import React, { useState } from "react";
import Play from "./components/Play";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  const [score, setScore] = useState(0);

  return (
		<>
			<div className="container">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/game">
						<Play score={score} setScore={setScore} />
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default App;
