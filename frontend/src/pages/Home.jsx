import { useEffect, useState } from "react"

//components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    //a variable is create inside useEffect in order to use async,
    //because i cant write useEffect(async () => {...} )
    useEffect(() => {
        const fetchWorkout = async () => {
            //problem with the CORS api => 4000 , front => 3000
            //so add a proxy in nodemodules front
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkout()
    },[])

    return(
        <div className="home">
           <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ) )}
           </div>
           <WorkoutForm/>
        </div>
    )
}

export default Home