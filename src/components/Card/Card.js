import React, { useState, useEffect } from 'react'
import Notification from '../Notification/Notification'
import Header from '../Header/Header'

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
			<Header countUnread={() => countUnread(notifications)} markAllRead={markAllRead}/>
			<div className='card__body'>
				{notifications.map((msg, index) => (
					<Notification notification={msg} toggleRead={() => toggleRead(index)} key={index} />
				))}
			</div>
		</div>
	)
}

export default Card
