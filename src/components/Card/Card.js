import React, { useState, useEffect } from 'react'
import images from '../../assets/images/images'
import chess from '../../assets/images/image-chess.webp'


const Card = props => {
	const [notifications, setNotification] = useState(props.notificationsList)

	const markAllRead = () => {
		const notificationsCopy = [...notifications]
		notificationsCopy.map(notification => (notification.read = true))
		setNotification(notificationsCopy)
	}

	const toggleRead = index => {
		const notificationCopy = [...notifications]
		notificationCopy[index].read = !notificationCopy[index].read
		setNotification(notificationCopy)
	}

	const countUnread = notifications => {
		let unreadAmount = 0
		notifications.forEach(message => {
			if (!message.read) unreadAmount++
		})
		return unreadAmount
	}

	useEffect(() => {
		document.title = `(${countUnread(notifications)}) Notifications | Notifications Page`
	}, [notifications])

	return (
		<div className='card'>
			<header className='card__header'>
				<h1 className='card__title'>
					Notifications
					<span className='card__badge'> {countUnread(notifications)}</span>
				</h1>
				<button className='card__button' onClick={markAllRead}>
					Mark all as read
				</button>
			</header>
			<div className='card__body'>
				{notifications.map((msg, index) => (
					<div
						className={`card__item ${!msg.read ? 'item-highlight' : ''}`}
						key={index}
						onClick={() => toggleRead(index)}>
						<figure className='card__item-figure'>
							<img className='card__item-social-img' src={images.get(msg.img)} alt='person' />
						</figure>
						<div className='card__item-content'>
							<div className='card__item-copy'>
								<span className='card__item-sender text-bold'>{msg.name}</span>
								<span className='card__item-topic'> {msg.action} </span>
								{msg.actionLink && msg.actionFor === 'post' ? (
									<a className='card__item-link text-bold post' href='#'>
										{msg.actionLink}
									</a>
								) : msg.actionLink && msg.actionFor === 'group' ? (
									<a className='card__item-link text-bold group' href='#'>
										{msg.actionLink}
									</a>
								) : null}
								{msg.read ? null : <span className='card__item-status'></span>}
								<p className='card__item-time'>{msg.time}</p>
								{msg.message ? (
									<p className='card__item-text'>
										Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already
										having lots of fun and improving my game.
									</p>
								) : null}
							</div>
							<div className='card__item-icon'>
								{msg.actionImg ? <img className='card__item-img' src={chess} alt='chess' /> : null}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Card
