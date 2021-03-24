
import React from 'react'
import { Form, Header, Segment , Button} from 'semantic-ui-react'

const EventForm = ({setFormOpen}) => {
    return (
        <Segment clearing>
            <Header content="Add new Event" as="h3"/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder="title"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="category"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="description"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="city"/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="venue"/>
                </Form.Field>
                <Button color="teal" content="Submit" floated="right"/>
                <Button basic content="Cancel" floated="right" onClick={()=>setFormOpen(false)}/>
            </Form>
        </Segment>
    )
}

export default EventForm
