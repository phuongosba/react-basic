import React from 'react';

// class ChildComponent extends React.Component {
//     render() {
//         console.log(">>>> prop:", this.props)
//         let { school, classK, courses } = this.props;
//         return (
//             <>  
//                 <div className="courseList">
//                     {courses.map((course, index) => {
//                         if (course.price >= 2000) {
//                             return (<div key={course.id}>{index + 1}: {course.name} - {course.price}</div>)
//                         }
//                     })}
//                 </div>
//             </>
//         )
//     }
// }

class ChildComponent extends React.Component {
    state = {
        showCourse: false
    }
    handleHideShow = () => {
        this.setState({
            showCourse: !this.state.showCourse
        })
    }
    render() {
        let { courses } = this.props;
        let { showCourse } = this.state
        return (
            <>
                {showCourse == false ? <div><button onClick={() => this.handleHideShow()} >show</button></div>
                :
                <>
                    <div className="courseList">
                        {courses.map((course, index) => {
                            if (course.price >= 2000) {
                                return (<div key={course.id}>{index + 1}: {course.name} - {course.price}</div>)                         }
                            }
                        )}
                    </div>
                    <div><button onClick={() => this.handleHideShow()}>hide</button></div>
                </>}            
            </>
        )
    }
}

export default ChildComponent;
