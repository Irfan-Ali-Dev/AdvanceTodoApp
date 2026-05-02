import {React , useState} from 'react'
import SubTask from './component/SubTask'
import './App.css'

function App() {
    const [input1, setInput1] = useState('')
    const [tasks, setTasks] = useState([])
    
    const GetCatogry = (e) => {
        setInput1(e.target.value)
    }
    function CreateTask () {
        if(input1 !== ''){
            setTasks([...tasks, input1])
            setInput1('')
        }else{
            alert('Please enter a task category')
        }
    }
    const TaskMap = tasks.map((task, index) => 
        <div className='ticket'
        style={{ border: '1px solid black', borderRadius:'20px', margin:'10px', padding:'10px'}}
        key={index}>
            <span className='sub-ticket' style={{display:'flex', flexwrap:'wrap', justifyContent:'space-between', padding:'0px'}}>
                <h2 className='tic-heading' style={{ margin:'0px'}}>{task}</h2>
                <button className='tic-delete-btn' onClick={() => deleteTask(index)}
                    style={{border:'none', padding: '0px', background:'none'}}
                    >❌</button>
            </span>
            <SubTask />
        </div>
    )

    const deleteTask = (index)=>{
        console.log("delete task " , index);
        tasks.splice(index , 1)
        setTasks([...tasks])
        
    }

  return (
    <div className="todo-container">
        <h1 className='mainHeading'>Advance Todo Application</h1>
        <input className='mainInput' 
        type="text"
        placeholder="Enter task Category"
        value={input1}
        onChange={GetCatogry}
        />
        <button className='main-btn' onClick={CreateTask}>Create Task</button>
        <span style={{display:'flex', flexWrap:'wrap'}}>{TaskMap}</span>
            

        

    </div>
  )
}

export default App