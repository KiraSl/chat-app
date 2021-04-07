import React, { useContext } from 'react'
import moment from 'moment'
import { Avatar, Comment as AntComment, Tooltip } from 'antd'
import { AppContext } from '../../../App.context'

const Comment = ({ content, author, createdAt }) => {
  const { state: { user}} = useContext(AppContext)

  return (
    <AntComment
      avatar={
        <Avatar
          src={user.avatar}
          alt="user's avatar"
        />
      }
      author={author}
      content={content}
      datetime={
        <Tooltip title={moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}>
          <span>- {moment().fromNow()}</span>
        </Tooltip>
      }
    />
  )
}

export { Comment }
