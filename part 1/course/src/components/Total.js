const Total = (props) => {
    return <p>total of {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises + + props.course.parts[3].exercises} exercises</p>
}

export default Total