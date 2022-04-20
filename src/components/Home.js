import React from 'react';
import { Link } from 'react-router-dom'

function Home({setUser, setIsSubmitted}) {

	const handleSubmit = () => {
		
		var { uname } = document.forms[0]

		setIsSubmitted(true)
		setUser(uname.value)
	}

	const renderForm = (
		<div className="form">
			<form>
				<div className="input-container">
					<input type="text" name="uname" required />
				</div>
				<div className="button-container">
					<Link to="/game" className="submit" onClick={() => handleSubmit()}>
						JOIN
					</Link>
				</div>
			</form>
		</div>
	)

	return (
		<div className="login-form">
			<div className="title">Create new player</div>
			 {renderForm}
		</div>
	)
}

export default Home
