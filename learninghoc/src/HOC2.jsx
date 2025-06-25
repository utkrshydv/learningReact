import { useState } from "react";

export default function UpdatedComponent(OgComp){
  function NewComp(){
    const [goals, setGoals] = useState(0)
    const scoreGoals = () => {
      setGoals(prev => prev+1)
    }
    return <OgComp scoreGoals={scoreGoals} goals={goals} />
  }
  return NewComp;
}
