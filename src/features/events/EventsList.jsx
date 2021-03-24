import React from 'react'
import EventItem from './EventItem'

const EventsList = ({events}) => {
    return (
        <>
        {events.map(event=>(
            <EventItem key={event.id} event={event}/>
        ))}
            
        </>
    )
}

export default EventsList
