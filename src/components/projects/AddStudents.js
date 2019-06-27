import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../../store/action/studentAction'

class AddStudents extends Component {
state = {
    firstName: '',
    lastName:'',
    fatherName:'',
    rollNumber:'',
    gender:''
}

handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    // this.props.addStudent(this.state)

}

    render() {
        return (
            <div className="container" >
                <form className="white" onSubmit = {this.handleSubmit}>
                    <div className="formgroup-md-6">
                        <div className="input-feild">
                        <label className="firstName">First Name</label>
                        <input className="form-control sm-4"
                               type="text" 
                               placeholder="First name"
                                id="firstName"
                                 onChange={this.handleChange} />
                                 </div>
                                 <div className="input-feild">
                        <label className="lastName">Last Name</label>
                        <input className="form-control sm-4"
                               type="text"
                               placeholder="Last name"
                               id="lastName" 
                               onChange={this.handleChange} />
                               </div>
                               <div className="input-feild">
                        <label className="fatherName">Father/Gaurdian Name</label>
                        <input className="form-control sm-4"
                               type="text"
                               placeholder="Father/Gaurdian name"
                               id="fatherName" 
                               onChange={this.handleChange} />
                               </div>
                               <div className="input-feild">
                        <label className="rollNumber">Roll Number</label>
                        <input className="form-control sm-4" 
                               type="number" 
                               placeholder="Roll Number" 
                               id="rollNumber" 
                               onChange={this.handleChange} />
                        </div>
                        <div className="input-feild">
                        <label className="gender">Gender</label>
                        <select class="custom-select mr-sm-2" 
                                id="inlineFormCustomSelect" 
                                id="gender" 
                                onChange={this.handleChange}>
                            <option selected>Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        </div>
                    </div>
                    <div class="button">
                    <input className="btn btn-primary" 
                           type="submit" 
                           value="Submit">
                           </input>
                           </div>
                    </form>             
                          
                        
            </div>
        )
    }
}



export default AddStudents
