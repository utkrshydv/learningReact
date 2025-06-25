import UpdatedComponent from "./HOC2"

function Ronaldo({scoreGoals, goals}){
  return(
    <div>
      <h1>Ronaldo: {goals}</h1>
      <button onClick={scoreGoals}>Score Goals</button>
    </div>
  )
}

export default UpdatedComponent(Ronaldo)