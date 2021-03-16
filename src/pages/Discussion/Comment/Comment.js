import React from 'react'
import moment from 'moment'
import { Comment as AntComment, Tooltip } from 'antd'

const Comment = ({ content, author, createdAt }) => (
  <AntComment
    author={author}
    content={content}
    datetime={
      <Tooltip title={moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}>
        <span>- {moment().fromNow()}</span>
      </Tooltip>
    }
  />
)

export { Comment }
