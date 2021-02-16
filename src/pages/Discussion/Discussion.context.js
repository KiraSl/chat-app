import React from 'react'

const DiscussionContext = React.createContext();

const actionTypes = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  LOAD_MESSAGES: 'LOAD_MESSAGES',
}

const stateTypes = {
  LOADING_MESSAGES: 'LOADING_MESSAGES',
  LOADED_MESSAGES: 'LOADED_MESSAGES',
  SUCCESSFULLY_ADDED_MESSAGE: 'SUCCESSFULLY_ADDED_MESSAGE',
}

const discussionInitialState = {
  stateType: stateTypes.LOADING_MESSAGES,
}

const discussionReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return {
        stateType: stateTypes.SUCCESSFULLY_ADDED_MESSAGE,
      }
  }
}

export { DiscussionContext, discussionInitialState, discussionReducer, actionTypes, stateTypes }
