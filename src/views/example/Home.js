import React from "react";
import { useNavigate } from "react-router-dom";



class Home extends React.Component {
    
    render() {
        console.log('>>> check props:', this.props)
        return (
            <p>
                Phuong Osba Learn React
            </p>
        )
    }
}

export default Home;