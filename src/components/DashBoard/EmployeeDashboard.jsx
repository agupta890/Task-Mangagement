import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {
  

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header  data={props.data} changeUser={props.changeUser}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
    
  )
}

export default EmployeeDashboard