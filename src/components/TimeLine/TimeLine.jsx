import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimeLineItem from './TimeLineItem';

const TimeLine = ({timeline}) => {
  return (
   <TimeLine  position="alternate">
       <TimeLineItem></TimeLineItem>
   </TimeLine>
  )
}

export default TimeLine