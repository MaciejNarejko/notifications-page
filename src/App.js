import React from 'react'
import Card from './components/Card/Card'
import notificationsList from './notificationsList'
import './App.scss'


function App() {
	return (
		<div className='App'>
			<Card notificationsList={notificationsList} />
		</div>
	)
}

export default App
