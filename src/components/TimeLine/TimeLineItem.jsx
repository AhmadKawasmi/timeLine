import React from 'react'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const TimeLineItem = ({title}) => {
  return (
    <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>{title}</TimelineContent>
  </TimelineItem>
  )
}

export default TimeLineItem