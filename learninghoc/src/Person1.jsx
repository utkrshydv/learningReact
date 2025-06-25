import UpdatedComponet from "./HOC.jsx"

function Person1({money, handleIncrease}){
  return(
    <div>
      <h2>John is offering: ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponet(Person1)