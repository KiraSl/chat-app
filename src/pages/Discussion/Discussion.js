import React, { useReducer, useEffect } from 'react'
import { DiscussionContext, discussionInitialState, discussionReducer, actionTypes, stateTypes } from './Discussion.context'

const Discussion = () => {
	const [state, dispatch] = useReducer(discussionReducer, discussionInitialState)

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		const response = await fetch('https://randomuser.me/api')
	// 		const users = await response.json()

	// 		const reducedUsers = users.results.reduce((acc, user) => ({
	// 			...acc,
	// 			[user.email]: {
	// 				name: `${user.name.first} ${user.name.last}`,
	// 				avatar: user.picture.thumbnail,
	// 			}
	// 		}), {})
	// 		console.log(reducedUsers)
	// 	}
	// 	fetchUser()
	// }, [])

	useEffect(() => {
		const fetchMessages = async () => {
			const response = await fetch('http://localhost:3001/messages')
			const messages = await response.json()
			console.log('messages', messages)
			// const reducedUsers = users.results.reduce((acc, user) => ({
			// 	...acc,
			// 	[user.email]: {
			// 		name: `${user.name.first} ${user.name.last}`,
			// 		avatar: user.picture.thumbnail,
			// 	}
			// }), {})
			// console.log(reducedUsers)
		}
		fetchMessages()
	}, [])

	return (
		<DiscussionContext.Provider value={{ state, dispatch }}>
			<div></div>
		</DiscussionContext.Provider>
	)
}

export { Discussion }
