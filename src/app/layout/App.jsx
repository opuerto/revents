import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route } from 'react-router-dom';
import EventDashboard from "../../features/event/EventDashbord/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import PeopleDashboard from "../../features/user/PeopleDashboard.jsx/PeopleDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/eventForm/EventForm";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Route exact path='/'  component={HomePage}/>
          <Route path='/events' component={EventDashboard}/>
          <Route path='/event/:id' component={EventDetailedPage}/>
          <Route path='/people' component={PeopleDashboard}/>
          <Route path='/profile/:id' component={UserDetailedPage}/>
          <Route path='/settings' component={SettingsDashboard}/>
          <Route path='/createEvent' component={EventForm}/>
         </Container>
      </div>
    );
  }
}

export default App;
