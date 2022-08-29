import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
//components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    //WITHOUT REDUCER+CONTEXT
    //const [workouts, setWorkouts] = useState(null)
    //WITH REDUCER+CONTEXT
    //useWorkoutsContext call the useContext in its function
    const { workouts, dispatch } = useWorkoutsContext()

    //a variable is create inside useEffect in order to use async,
    //because i cant write useEffect(async () => {...} )
    useEffect(() => {
        const fetchWorkout = async () => {
            //problem with the CORS api => 4000 , front => 3000
            //so add a proxy in nodemodules front
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok) {
                //WITHOUT REDUCER+CONTEXT
                //setWorkouts(json)
                //WITH REDUCER+CONTEXT
                dispatch({type: 'SET_WORKOUTS', payload: json})

            }
        }

        fetchWorkout()

        //!!!
        //dispatch is an external function, you have to declare it in the array of useEffect
    },[dispatch])

    return(
        <div className="home">
           <div className="workouts">
           {console.log(workouts)}
                {workouts && workouts.map((workout) => (
                    
                    <WorkoutDetails key={workout._id} workout={workout} />
                ) )}
           </div>
           <WorkoutForm/>
        </div>
    )
}

export default Home