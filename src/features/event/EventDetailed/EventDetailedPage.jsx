import React from "react";
import {connect} from 'react-redux'
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSideBar from "./EventDetailedSideBar";

const mapState = (state, ownProps) => {
    //get the parameters of the url from ownProps 
    const eventId = ownProps.match.params.id;

    // we use this empty event to avoid possible errors in case you write the wrong id in the url 
    // it will just display nothing instead of an error 
    let event = {};

    if(eventId && state.events.length > 0) {
      event = state.events.filter(event => event.id === eventId)[0];
    }
    return {
      event
    }
}

const EventDetailedPage = ({event}) => {
  return (
    
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSideBar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
