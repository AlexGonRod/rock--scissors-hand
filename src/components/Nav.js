import React from 'react';
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
	return (
		<div className="nav">
			<div className="user-text">
                <span>{user}</span>
			</div>
            <Link to="/" className="back-nav"/>
		</div>
	)
}

export default Nav
