import React, { Component } from 'react'
import DatePicker from './DatePicker';
import AddStudents from '../projects/AddStudents';

export class DashBoard extends Component {
    render() {
        return (
            <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <AddStudents/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <DatePicker />
                </div>
                </div>                
            </div>
        )
    }
}

export default DashBoard
