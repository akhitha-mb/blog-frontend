import axios from 'axios'
import React, { useState } from 'react'

export const Signup = () => {
    
    const [data,setData] = useState(
        {
        "name":"",
        "email":"",
        "password":""


    }
)
const inputHandler=(event) => {
setData({...data,[event.target.name]: event.target.value })

}
    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8083/signup",data).then(
         (response) => {
            console.log(response.data)
            if (response.data.status=="success" ) {
                alert("successfull")
            } else {
                alert("error")
            }
         }

        ).catch().finally()
    }



  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">USER NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <button onClick={readValue} className="btn btn-success">SUBMIT</button>
                            <href src="./" ></href>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        </div>
  )
}
