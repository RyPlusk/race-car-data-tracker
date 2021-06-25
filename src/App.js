import { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       date: '',
       airTemp: '',
       trackTemp: '',
       eventType: '',
       backRightTire: '',
       frontRightTire: '',
       backLeftTire: '',
       frontLeftTire: '',
       trackCondition: '',
       vehicleWeight: '',
       bestLapTime: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/559e79e6-0230-447e-a965-4b33131ce6b2', this.state)
    .then(response => {
      console.log(response);
    })
  }
  
  render() {
    const { date,
    airTemp,
    trackTemp,
    eventType,
    backRightTire,
    frontRightTire,
    backLeftTire,
    frontLeftTire,
    trackCondition,
    vehicleWeight,
    bestLapTime } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Date</label>
            <input placeholder='Enter the Date' type="text" name = "date" value = {date} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Air Temp</label>
            <input placeholder='Enter the Air Temp' type="number" name = "airTemp" value = {airTemp} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Track Temp</label>
            <input placeholder='Enter the Track Temp' type="number" name = "trackTemp" value = {trackTemp} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Event Type</label>
            <input placeholder='Enter the Event Type' type="text" name = "eventType" value = {eventType} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Back Right Tire</label>
            <input placeholder='Back Right Tire Pressure' type="number" name = "backRightTire" value = {backRightTire} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Front Right Tire</label>
            <input placeholder='Front Right Tire PRessure' type="number" name = "frontRightTire" value = {frontRightTire} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Back Left Tire</label>
            <input placeholder='Back Left Tire Pressure' type="number" name = "backLeftTire" value = {backLeftTire} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Front Left Tire</label>
            <input placeholder='Front Left Tire Pressure' type="number" name = "frontLeftTire" value = {frontLeftTire} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Track Condition</label>
            <input placeholder='Enter the Track Condition' type="text" name = "trackCondition" value = {trackCondition} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Vehicle Weight(in lbs)</label>
            <input placeholder='Enter the Vehicle Weight' type="number" name = "vehicleWeight" value = {vehicleWeight} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Best Lap Time</label>
            <input placeholder='Enter the Best Lap Time' type="text" name = "bestLapTime" value = {bestLapTime} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}