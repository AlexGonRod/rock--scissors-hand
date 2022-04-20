import React, { useState } from "react";
import Play from "./components/Play";
import Home from "./components/Home";
import NotFound from './components/NotFound';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {

// This could be in a main components
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0);
  const [user, setUser] = useState('');

  return (
		<>
			<div className="container">
				<Switch>
					<Route exact path="/">
					  <Home setUser={setUser} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
					</Route>
					<Route path="/game">
						{isSubmitted && <Play score={score} setScore={setScore} user={user} />}
					</Route>
					<Route path="*"> 
						 <Redirect to='/'/> 
					</Route>
				</Switch>
			</div>
		</>
	)
}

export default App;
