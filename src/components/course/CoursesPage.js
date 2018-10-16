import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { course: { title: "" } };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState( { course: course } );
  }

  onClickSave() {
    //this.props.dispatch(courseActions.createCource(this.state.course));
    // After adding the mapDispatchToProps we can use like this (for the first option):
    //  this.props.createCource(this.state.course);
    // Or like this (for the second option):
    this.props.actions.createCource(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
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
