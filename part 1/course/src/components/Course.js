import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
    return (
        <>
            <Header course={props.course} />
            <Content course={props.course} />
        </>
    )
}

export default Course;