import React, { useContext, useState } from 'react'
import { Button, Input, Space } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import {  actionTypes, DiscussionContext } from '../Discussion.context'

const { TextArea } = Input;

const AddComment = () => {
  const { dispatch } = useContext(DiscussionContext)
  const [comment, setComment] = useState('')

  const handleInputChange = (e) => {
    setComment(e.target.value)
  }

  const handleAddComment = async () => {
    const response = await fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment, author: 'Kira' })
    })
    let message
    console.log('response', response)
    if (response.status === 200) {
      message = await response.json()
      setComment('')
    }
    // const message = await response.json()
    console.log('comment', comment)
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
