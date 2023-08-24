import Header from "./Header";
import Content from "./Content";
import Total from "./Total";           

const Course = (props) => {
    return (
        <>
            <Header name={props.courses.name} />
            <Content parts={props.courses.parts} />
            <Total sum={props.courses.parts} />
        </>
    )
}

export default Course;