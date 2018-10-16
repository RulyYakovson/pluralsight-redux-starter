import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
   }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // After adding the mapDispatchToProps we don't need dispath as a propType:
  // dispatch: PropTypes.func.isRequired,

    // If using the first option in the mapDispatchToProps (in addition the courses prop):
  // createCource: PropTypes.func.isRequired
    // If using the second option in the mapDispatchToProps:
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Manualy option:
    //createCource: course => dispatch(courseActions.createCource(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
/* The line above came to replace those two lines:
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps (CoursesPage); */
