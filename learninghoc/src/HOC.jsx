import { useState } from "react"

function UpdatedComponet(OriginalComponent){
  function NewComponent(){
    const [money, setMoney] = useState(10)
    const handleIncrease = () => {
      setMoney(money*2)
    }
    return <OriginalComponent handleIncrease={handleIncrease} money={money} />
  }
  return NewComponent;
}

export default UpdatedComponet;