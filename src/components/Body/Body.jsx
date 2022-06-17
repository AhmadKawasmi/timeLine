import React from 'react'
import './style.css'
import { Button ,Input } from '@mui/material'

const Body = (props) => {
    const {user, setUser} = props

    const handleClick = function () {
        setUser('sammer')
    }
  return (
    <div className='body' onClick={handleClick}>Body - {user} <br />
        <Input/>
        <Button>Click Me</Button>
    </div>
  )
}

export default Body