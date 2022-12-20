import React, { useState } from 'react'

function Form(props) {
    const [userInfo,setUserİnfo]=useState({name:'',password:'',email:''})
    const changeİnfo=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setUserİnfo({
            ...userInfo,
            [name]: value
        })
    }
    return (
        <div>
            {  props.showForm &&      
                 (

                <form className="form">
                    <input type="text" placeholder='Name' name='name' onChange={changeİnfo} value={userInfo.name}/>
                    <input type="email" placeholder='Email' name="email" onChange={changeİnfo} value={userInfo.email} />
                    <input type="password" placeholder='Password' name='password' onChange={changeİnfo}  value={userInfo.password}/>
                    <button className='signİnBTN' onClick={()=>props.setShowForm(false)}>Sign İn </button>
                </form>
                 )
            }
            <div className='infoArea'>
                <div className='infoName'>
                        {userInfo.name}
                </div>
            </div>
        </div>
    )
}

export default Form
