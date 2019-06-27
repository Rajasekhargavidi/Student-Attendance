import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
 
class Picker extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="datepicker">
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
       />
      </div>
    );
  }
}

export default Picker
