const Total = (props) => {
  const totalArray = props.course.parts;
  const total = totalArray.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0,);

    return <p> total of {total} exercises </p>
}

export default Total