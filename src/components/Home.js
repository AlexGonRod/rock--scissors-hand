import React, { useState } from 'react';
import { createBrowserHistory } from 'history'
let history = createBrowserHistory()

function Home() {
	const [errorMessages, setErrorMessages] = useState({})
	const [isSubmitted, setIsSubmitted] = useState(false)

	const database = [
		{
			username: 'user1',
		},
		{
			username: 'user2',
		},
	]

	const error = {
		uname: 'invalid username',
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		var { uname } = document.forms[0]

        const userData = database.find((user) => user.username === uname.value)
        console.log(userData)

		if (userData) {
			setIsSubmitted(true)
            history.push('/game')
		} else {
			setErrorMessages({ name: 'uname', message: errors.uname })
		}
	}

	const renderErrorMessage = (name) =>
		name === errorMessages.name && (
			<div className="error">{errorMessages.message}</div>
		)

	const renderForm = (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<div className="input-container">
					<label>Username </label>
					<input type="text" name="uname" required />
					{renderErrorMessage('uname')}
				</div>
				<div className="button-container">
                    
					<input type="submit" />
				</div>
			</form>
		</div>
	)

	return (
		<div className="login-form">
			<div className="title">Sign In</div>
			{isSubmitted || renderForm}
		</div>
	)
}

export default Home
