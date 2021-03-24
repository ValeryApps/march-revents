import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { sampleData } from '../../app/api/sampleData'
import EventForm from './EventForm'
import EventsList from './EventsList'


const EventDashboard = ({formOpen, setFormOpen}) => {
    const [events] = useState(sampleData);
   
    return (
        <Grid>
            <Grid.Column width={10}>
            <EventsList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                <EventForm setFormOpen={setFormOpen}/>
                }
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard
