import React, { useReducer, useEffect } from 'react'
import { DiscussionContext, discussionInitialState, discussionReducer, actionTypes, stateTypes } from './Discussion.context'
import { Comment } from './Comment/Comment'
import { AddComment } from './AddComment/AddComment'
import { Divider, message, Skeleton } from 'antd'

const Discussion = () => {
  const [state, dispatch] = useReducer(discussionReducer, discussionInitialState)

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('http://localhost:3001/messages')
      const { messages } = await response.json()
      dispatch({ type: actionTypes.LOAD_MESSAGES, messages })
    }
    fetchMessages()
  }, [])

  useEffect(() => {
    if (state.stateType === stateTypes.SUCCESSFULLY_ADDED_MESSAGE) {
      message.success('Successfully added a message', 2)
    }
    if (state.stateType === stateTypes.FAILED_TO_ADD_MESSAGE) {
      message.error('Failed to add a message', 2)
    }
    if (state.messages.length) {
      dispatch({ type: actionTypes.RESET_STATE_TYPE })
    }
  }, [state.messages, state.stateType])

  return (
    <DiscussionContext.Provider value={{ state, dispatch }}>
      {state.stateType === stateTypes.LOADING_MESSAGES && <Skeleton avatar paragraph={{ rows: 1 }} />}
      {state.messages.map(message => (
        <Comment {...message} key={message.createdAt} />
      ))}
      <Divider />
      <AddComment />
    </DiscussionContext.Provider>
  )
}

export { Discussion }
