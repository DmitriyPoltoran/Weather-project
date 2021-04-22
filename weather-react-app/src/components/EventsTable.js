import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class EventsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.events({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <ul>
        <h1>Id</h1>
        {this.state.events.map((event) => <li>{event.id} </li>)}
        <h1>Data</h1>
        {this.state.events.map((event) => <li>  {event.date}</li>)}
        <h1>Location</h1>
        {this.state.events.map((event) => <li> {event.location}</li>)}
        {/* <h1>Temperature</h1> */}
        {/* {this.state.events.map((event) => <li> {event.temperature}</li>)} */}
        <h1>Image</h1>
        {this.state.events.map((event) => <li> <img src={event.image} alt="" /></li>)} 
      </ul>
    </div>
  }
}

export default EventsTable;