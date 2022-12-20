import React, { useState } from 'react'
import Form from './Form'
function Header() {
const [showForm,setShowForm]=useState(false)
  return (
    <div>
     <header className='header'>
         <button className='singBtn' onClick={()=>setShowForm(true)}>Sign İn</button>
     </header>
     <Form showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default Header
