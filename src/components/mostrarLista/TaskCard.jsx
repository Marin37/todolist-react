import react from 'react'

function TaskCard(props) {

    return (
        <div key={props.task.id}>
          <h1>{props.task.title}</h1>
          <h3>{props.task.description}</h3>
        </div>
    )
}

export default TaskCard