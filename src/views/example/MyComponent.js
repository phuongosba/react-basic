import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        courses: [
            { id: 1, name: "HTML", price: "1000" },
            { id: 2, name: "CSS", price: "2000" },
            { id: 3, name: "JavaScript", price: "3000" },
            { id: 4, name: "ReactJS", price: "4000" }
        ]
    }

    handleOnChangeInput = (e, input) => {
        if (input === 'firstname') {
            this.setState({
                firstname: e.target.value
            })
        }
        else if (input === 'lastname') {
            this.setState({
                lastname: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(">>> data:", this.state)
    }

    render() {
        console.log(">>>> state:", this.state)
        return (
            <>  
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.firstname}
                    onChange={(e, input = "firstname") => this.handleOnChangeInput(e, input)} /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" value={this.state.lastname} 
                    onChange={(e, input = "lastname") => this.handleOnChangeInput(e, input)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
                </form>
                <ChildComponent
                school={"HCMUS"}
                classK={"17DTV2"}
                courses={this.state.courses}
                />
            </>
        )
    }
}

export default MyComponent;
