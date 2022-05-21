import React from "react";

class AddComponent extends React.Component {
    
    state = {
        name: "",
        price: ""
    }

    handleOnChangeInput = (e, input) => {
        if (input === 'Course') {
            this.setState({
                name: e.target.value
            })
        }
        else if (input === 'Price') {
            this.setState({
                price: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.price){
            alert("Missing required params!");
            return;
        }
        this.props.addNewCourse({
            id: Math.floor(Math.random()*500),
            name: this.state.name,
            price: this.state.price
        });

        this.setState({
            id: '',
            name: '',
            price: ''
        })
    }
    render() {

        return (
            <form>
                    <label htmlFor="fname">Course:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.name}
                    onChange={(e, input = "Course") => this.handleOnChangeInput(e, input)} /><br/>
                    <label htmlFor="lname">Price:</label><br/>
                    <input type="text" id="lname" name="lname" value={this.state.price} 
                    onChange={(e, input = "Price") => this.handleOnChangeInput(e, input)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
            </form>
        )
    }
}

export default AddComponent;