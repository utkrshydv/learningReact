
import UpdatedComponet from "./HOC.jsx"

function Person2({money, handleIncrease}){
  return(
    <div>
      <h2>Antony is offering: ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponet(Person2)