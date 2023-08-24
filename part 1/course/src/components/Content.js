import Part from "./Part";

const Content = (props) => {
  const partItems = props.parts.map((part) => { 
    return <div key={part.id}> <Part name = {part.name} exercise = {part.exercises} /></div>
  })

  return (
    <>
    {partItems}
    </>
)}

export default Content