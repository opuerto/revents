import React, { Component } from "react";
import { connect } from 'react-redux'
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../eventForm/EventForm";
import cuid from 'cuid';
import { createEvent, deleteEvent, updateEvent } from '../eventActions'

const mapState = (state) => ({
  events:state.events
})

const actions = {
    createEvent,
    deleteEvent,
    updateEvent
}

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  
  //An alternative method to this.handleFormOpen = this.handleFormOpen.bind(this); functions is to use this arrow function doing this
  // handleFormOpen = () => avoid having to declare and bind the function on the constructor
  handleFormOpen = () => {
    this.setState({
      selectedEvent: null, 
      isOpen: true
    });
  };

  handleOpenEvent = (eventToOpen) => () => {
      this.setState({
        selectedEvent: eventToOpen,
        isOpen:true
      })
      console.log(this.state.selectedEvent)
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = 'assets/user.png';
    this.props.createEvent(newEvent)
    this.setState({
        isOpen:false
    })

  }

  handleUpdateEvent = (updatedEvent) => {
    
    this.props.updateEvent(updatedEvent)
    this.setState({
      isOpen:false,
      selectedEvent: null
    })
  }

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  }

  render() {
    const {selectedEvent} = this.state;
    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
