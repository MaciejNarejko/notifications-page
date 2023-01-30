import React from 'react'
import Card from './components/Card/Card'
import notificationsList from './notificationsList'

function App() {
	return (
		<div className='app'>
			<Card notificationsList={notificationsList} />
		</div>
	)
}

export default App
