import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios  from 'axios';

export default  function Login()
{
    const navigate=useNavigate();
    const [uname,setUname]=useState('');
    const [pass,setPass]=useState('');
    const onFinish=(values)=>{
         axios.post('/',{username:uname,passwor:pass})
        .then(response=>{
            if(response.data=="OK"){
             navigate('/home');
            console.log('Login Successful',response);
            }
            else
            navigate('/');
        })
        .catch(error =>{
            console.error('Error',error);
        });
    };

    return(
        <form
        onFinish={onFinish}
        method='post'>

        <div id="imagehouse">
           <div className="header">
                <h1 id="rentify">Rentify</h1>
            </div>
                
            <h2 id="slogan">Unlocking the door to your perfect home!</h2>
            <div id="moving table">
                <table id="table1">
                    <tr>
                        <td>
                            <h1  id="login">Login</h1>
                            <form>
                                <input 
                                type="text"
                                 placeholder='Username' 
                                 id="column1"
                                 value={uname}
                                        onchange={(event)=>{setUname(event.target.value);}}/><br /><br />
                                
                            <br></br><br></br>
                                <input 
                                type="text"
                                 placeholder="Password"
                                  id="column1"
                                  value={pass}
                                        onchange={(event)=>{setPass(event.target.value);}}/><br /><br />
                            </form><br></br>
                            Don't have an accouunt / <span onClick={()=>navigate("/signup")}>  Signup</span>
                            
                            <button type="submit" id="loginbutton" onClick={()=>onFinish()}>Login</button>
                        </td>
                    </tr>
                </table>
            </div>
            
        </div>
        </form>
    );
}

