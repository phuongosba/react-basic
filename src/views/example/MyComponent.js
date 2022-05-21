import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        courses: [
            { id: 1, name: "HTML", price: "1000" },
            { id: 2, name: "CSS", price: "2000" },
            { id: 3, name: "JavaScript", price: "3000" },
            { id: 4, name: "ReactJS", price: "4000" }
        ]
    }

    addNewCourse = (course) => {
        this.setState({
            courses: [...this.state.courses, course]
        })
    }

    deleteCourse = course => {
        let currentCourses = this.state.courses;
        let newCourse = currentCourses.filter(item => item.id !== course.id);
        this.setState({
            courses: newCourse 
        })
    } 

    render() {
        return (
            <>  
                <AddComponent
                addNewCourse={this.addNewCourse}
                />
                
                <ChildComponent
                courses={this.state.courses}
                deleteCourse={this.deleteCourse}
                />
            </>
        )
    }
}

export default MyComponent;
