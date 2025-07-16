import React,{useState} from 'react'

const Employee = (props) => {
    const [isLiked,setIsLiked]=useState('false');
  return (
    <div>
      <div className='employee-cards'>
        <h5>Name : {props.name}</h5>
        <p>Designation : {props.designation}</p>
        <button className='like' onClick={()=>setIsLiked(!isLiked)}>{isLiked?"🤍":"❤️"}</button>
      </div>
    </div>
  )
}

export default Employee
