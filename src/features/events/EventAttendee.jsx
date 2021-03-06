import React from 'react'
import { Image, List } from 'semantic-ui-react'

const EventAttendee = ({attendee}) => {
    return (
        <List.Item>
            <Image src={attendee.photoURL||"assets/user.png"} size="mini" circular/>
        </List.Item>
    )
}

export default EventAttendee
