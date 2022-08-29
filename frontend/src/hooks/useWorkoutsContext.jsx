import { WorkoutsContext } from "../context/WorkoutsContext"
import { useContext } from "react"

//this hook is usefull to checked if the provider of the context used is true

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}