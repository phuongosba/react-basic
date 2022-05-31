import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";


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

export default Color(Home);