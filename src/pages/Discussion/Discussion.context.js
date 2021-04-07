import React from 'react'

const DiscussionContext = React.createContext();

const actionTypes = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  LOAD_MESSAGES: 'LOAD_MESSAGES',
  RESET_STATE_TYPE: 'RESET_STATE_TYPE',
  UPDATE_COMMENT: 'UPDATE_COMMENT',
}

const stateTypes = {
  LOADING_MESSAGES: 'LOADING_MESSAGES',
  LOADED_MESSAGES: 'LOADED_MESSAGES',
  SUCCESSFULLY_ADDED_MESSAGE: 'SUCCESSFULLY_ADDED_MESSAGE',
  FAILED_TO_ADD_MESSAGE: 'FAILED_TO_ADD_MESSAGE',
}

const discussionInitialState = {
  comment: '',
  stateType: stateTypes.LOADING_MESSAGES,
  messages: [],
}

const discussionReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return action.message ? {
        stateType: stateTypes.SUCCESSFULLY_ADDED_MESSAGE,
        messages: [...state.messages, action.message],
        comment: ''
      } : {
        stateType: stateTypes.FAILED_TO_ADD_MESSAGE,
        messages: state.messages,
        comment: state.comment,
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
    case actionTypes.UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      }
    default:
      console.log('Action type not found')
  }
}

export { DiscussionContext, discussionInitialState, discussionReducer, actionTypes, stateTypes }
