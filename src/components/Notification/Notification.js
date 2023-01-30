import React from 'react'
import images from '../../assets/images/images'
import chess from '../../assets/images/image-chess.webp'

const Notification = props => {
	return (
		<div
			className={`card__item ${!props.notification.read ? 'item-highlight' : ''}`}
			onClick={() => props.toggleRead()}>
			<figure className='card__item-figure'>
				<img className='card__item-social-img' src={images.get(props.notification.img)} alt='person' />
			</figure>
			<div className='card__item-content'>
				<div className='card__item-copy'>
					<span className='card__item-sender text-bold'>{props.notification.name}</span>
					<span className='card__item-topic'> {props.notification.action} </span>
					{props.notification.actionLink && props.notification.actionFor === 'post' ? (
						<a className='card__item-link text-bold' href='#'>
							{props.notification.actionLink}
						</a>
					) : props.notification.actionLink && props.notification.actionFor === 'group' ? (
						<a className='card__item-link text-bold card__item-link--group' href='#'>
							{props.notification.actionLink}
						</a>
					) : null}
					{props.notification.read ? null : <span className='card__item-status'></span>}
					<p className='card__item-time'>{props.notification.time}</p>
					{props.notification.message ? (
						<p className='card__item-text'>
							Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having
							lots of fun and improving my game.
						</p>
					) : null}
				</div>
				<div className='card__item-icon'>
					{props.notification.actionImg ? <img className='card__item-img' src={chess} alt='chess' /> : null}
				</div>
			</div>
		</div>
	)
}

export default Notification
