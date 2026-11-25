// import React from 'react'

const Student = () => {
    const stds=["Manish","Neha","Priya","Rahul","Nurpul"]
  return (
    <div>
      {/* <h1>Student List</h1>
      <ul>
        {stds.map((std, index) => (
          <li key={index}>{std}</li>
        ))}
      </ul> */}
      {stds.map((el,i)=>{
        return <div>
            <p>{i+1}</p>
            <h1>{el}</h1>
        </div>
      })
      }
    </div>
  )
}

export default Student
