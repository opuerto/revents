import React, { Component } from "react";
import { connect } from 'react-redux'
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import {  deleteEvent } from '../eventActions'

const mapState = (state) => ({
  events:state.events
})

const actions = {
    deleteEvent
}

class EventDashboard extends Component {
    
  //An alternative method to this.handleFormOpen = this.handleFormOpen.bind(this); functions is to use this arrow function doing this
  // handleFormOpen = () => avoid having to declare and bind the function on the constructor
 

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  }

  render() {
    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent}  events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
