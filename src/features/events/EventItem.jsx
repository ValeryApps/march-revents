
import React from "react";
import { Icon, Item, List, Segment, Button } from "semantic-ui-react";
import EventAttendee from "./EventAttendee";

const EventItem = ({event}) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={event.hostPhotoURL || "assets/user.png"} alt="" circular />
            <Item.Content>
              <Item.Header content={event.title || "Revent Title"} />
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date.toString()}
          <Icon name="marker" />
          {event.venue.address}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map(attendee=>(
            <EventAttendee key={attendee.id} attendee={attendee}/>
          ))}
        </List>
      </Segment>
      <Segment clearing>
          <div>{event.description}</div>
          <Button color="teal" content="View" floated="right"/>
      </Segment>
    </Segment.Group>
  );
};

export default EventItem;
