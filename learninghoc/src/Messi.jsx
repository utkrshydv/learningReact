import UpdatedComponent from "./HOC2"

function Messi({scoreGoals, goals}){
  return(
    <div>
      <h1>Messi: {goals}</h1>
      <button onClick={scoreGoals}>Score Goals</button>
    </div>
  )
}

export default UpdatedComponent(Messi)