const WorkoutDetails = ({ workout }) => {
    return (
        // <div className='workout-details'>
        //     <h4>{workout.title}</h4>
        //     <p><strong>Load (kg) : </strong>{workout.load}</p>
        //     <p><strong>Reps : </strong>{workout.reps}</p>
        //     <p>{workout.createdAt}</p>
        // </div>
        <div className="card mb-4" style={{'width': '60rem'}}>
            <div className="card-body">
                <h5 className="card-title">{workout.title}</h5>
                <p className="card-text"><strong>Load (kg) : </strong>{workout.load}</p>
                <p className="card-text"><strong>Reps : </strong>{workout.reps}</p>
                <p className="card-text">{workout.createdAt}</p>
            </div>
        </div>
    )
}

export default WorkoutDetails;