import React from 'react';

class ChildComponent extends React.Component {
    render() {
        console.log(">>>> prop:", this.props)
        let { school, classK, courses } = this.props;
        return (
            <>  
                <div className="courseList">
                    {courses.map((course, index) => {
                        return (<div key={course.id}>{index + 1}: {course.name} - {course.price}</div>)
                    })}
                </div>
            </>
        )
    }
}

export default ChildComponent;
