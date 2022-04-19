import React from 'react'

const Icon = ({ onClick, dataId, className }) => {
	return (
		<div
			data-id={dataId}
			onClick={onClick}
			className={className}
		></div>
	)
}

export default Icon
