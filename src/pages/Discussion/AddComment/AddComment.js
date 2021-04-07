import React, { useContext } from 'react'
import { Button, Input, Space } from 'antd'
import { SendOutlined } from '@ant-design/icons';
import { actionTypes, DiscussionContext } from '../Discussion.context'
import { AppContext } from '../../../App.context'


const { TextArea } = Input;

const AddComment = () => {
  const { state: { comment }, dispatch } = useContext(DiscussionContext)
  const { state: { user }} = useContext(AppContext)

  const handleInputChange = (e) => {
    dispatch({ type: actionTypes.UPDATE_COMMENT, comment: e.target.value })
  }

  const handleAddComment = async () => {
    const response = await fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment, author: user.name })
    })

    let message

    if (response.status === 200) {
      message = await response.json()
    }

    dispatch({ type: actionTypes.ADD_MESSAGE, message })
  }


  return (
    <Space direction="vertical">
      <TextArea maxLength={100} onChange={handleInputChange} value={comment} />
      <Button type="primary" shape="circle" icon={<SendOutlined />} onClick={handleAddComment} size="large" />
    </Space>
  )
}

export { AddComment }
