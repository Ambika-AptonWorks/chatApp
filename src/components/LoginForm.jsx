import { useState } from "react"
import axios from 'axios';
const LoginForm=()=>{
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventdefault();
        const Author={'Project-ID':'69a2c1b2-a809-4833-bca5-366447121c48','User-Name':userName,'User-Secret':password}
       try{ 
          axios.get('https://api.chatengine.io/chats', {headers:Author});
            localStorage.setItem('userName',userName);
            localStorage.setItem('password',password)

            window.location.reload();
        }catch(error){

        }
    }
    return(
          <div className="wrapper justify-content-center d-flex">
              <div className="form  ">
                  <h1 className="title d-flex text-center">Chat Application</h1>
                  <form onSubmit={handleSubmit} className='justify-content-center'> 
                    <input type="text" value={userName} name="username" className="mb-3  mx-5 p-1" placeholder="Enter Name" required onChange={(e)=>setUserName(e.target.value)}/> <br />
                    <input type="password" value={password} name="password" className="mb-3  mx-5 p-1" placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}/><br />
                    <button className="btn btn-info text-center mx-5">start chatting</button>
                </form>
              </div>
          </div>
    )

}
export default LoginForm