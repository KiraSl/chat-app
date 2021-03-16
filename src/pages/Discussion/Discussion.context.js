import React from 'react'

const DiscussionContext = React.createContext();

const actionTypes = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  LOAD_MESSAGES: 'LOAD_MESSAGES',
  RESET_STATE_TYPE: 'RESET_STATE_TYPE',
}

const stateTypes = {
  LOADING_MESSAGES: 'LOADING_MESSAGES',
  LOADED_MESSAGES: 'LOADED_MESSAGES',
  SUCCESSFULLY_ADDED_MESSAGE: 'SUCCESSFULLY_ADDED_MESSAGE',
  FAILED_TO_ADD_MESSAGE: 'FAILED_TO_ADD_MESSAGE',
}

const discussionInitialState = {
  stateType: stateTypes.LOADING_MESSAGES,
  messages: [],
}

const discussionReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        stateType: action.message ? stateTypes.SUCCESSFULLY_ADDED_MESSAGE : stateTypes.FAILED_TO_ADD_MESSAGE,
        messages: action.message ? [...state.messages, action.message] : state.messages,
      }
    case actionTypes.LOAD_MESSAGES:
      return {
        ...state,
        stateType: stateTypes.LOADED_MESSAGES,
        messages: action.messages,
      }
    case actionTypes.RESET_STATE_TYPE:
      return {
        ...state,
        stateType: stateTypes.LOADED_MESSAGES,
      }

    default:
      console.log('Action type not found')
  }
}

export { DiscussionContext, discussionInitialState, discussionReducer, actionTypes, stateTypes }
