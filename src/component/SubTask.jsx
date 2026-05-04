import {React , useState} from 'react'
import './SubTask.css'

function SubTask() {
  const [input, setInput] = useState('')
  const [subTask, setSubTask] = useState([])

  const getInputValue = (e) => {
    setInput(e.target.value)
  }

  const AddSubTask = () => {
    if (input !== '') {
      setSubTask([...subTask, input]);
      setInput('');
    }
  };
  const SubTaskMap = subTask.map ((task, index) =>
  <li className='sub-task-li' key={index}>
    <p className='sub-task-P'>{task}</p>
    <button className='sub-task-btn-edit' onClick={() => editSubtask(index)}>Edit</button>
    <button className='sub-task-btn-delete' onClick={() => deleteSubTask(index)}>Delete</button>
    </li>
  )

    const deleteSubTask = (index)=>{
        console.log("delete subtask " , index);
        subTask.splice(index , 1)
        setSubTask([...subTask])
        
    }
        const editSubtask = (index) => {
          const updatedTitle = prompt("Enter updated title", subTask[index]);

          if (updatedTitle !== null && updatedTitle !== '') {
            const updatedTasks = [...subTask];
            updatedTasks[index] = updatedTitle;
            setSubTask(updatedTasks);
          }
        };
  return (
    <div className='sub-task-div'> 
      {/* <h1>Hello World</h1> */}
      <input 
      className='sub-task-input'
      type="text"
      placeholder='Enter Your Task'
      value={input}
      onChange={getInputValue}
      />
      {/* <p>{input}</p> */}
      <button className='sub-task-btn-add' onClick={AddSubTask}>
        Add Task
      </button>
      <ul className='sub-task-ul'>
        {SubTaskMap}
      </ul>
    </div>
  )
}


export default SubTask