import React from 'react'

const Header= props => {

    return (
        <header className='card__header'>
				<h1 className='card__title'>
					Notifications
					<span className='card__badge'> {props.countUnread(props.notifications)}</span>
				</h1>
				<button className='card__button' onClick={props.markAllRead}>
					Mark all as read
				</button>
			</header>
    )
}

export default Header