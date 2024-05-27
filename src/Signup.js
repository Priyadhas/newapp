import  {React, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Signup() {
    const navigate = useNavigate();
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [uname,setUname]=useState('');
    const[pass,setPass]=useState('');
    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };
    const [userType, setUserType] = useState('');
    
const onFinish=(values)=>{
    axios.post('/SignUp',{FirstName:FirstName,LastName:LastName,LastName:LastName,Email:email,password:pass,PhoneNumberr:phone})
    .then(response=>{
        navigate("/");
        console.log("SignupSuccessfull", response);
    })
    .catch(error=>{
        console.error('There was an error signing up',error);
    });
    };
    return (
        <form
        onFinish={onFinish}
        method='post'
            >
        <div id="imagehouse">
            <div className="header">
                <h1 id="rentify">Rentify</h1>
            </div>

            <h2 id="slogan">Unlocking the door to your perfect home!</h2>
            <div id="moving table">
                <table id="table1">
                    <tbody>
                        <tr>
                            <td>
                                <h1 id="login">Signup</h1>
                                <form>
                                    <input
                                        type="text"
                                        placeholder='First Name'
                                        id="column1" 
                                        value={FirstName}
                                        onchange={(event)=>{setFirstName(event.target.value);}}/><br /><br />
                                    <input
                                        type="text"
                                        placeholder='Last Name'
                                        id="column1" 
                                        value={LastName}
                                        onchange={(event)=>{setLastName(event.target.value);}}/><br /><br />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id="column1" 
                                        value={email}
                                        onchange={(event)=>{setEmail(event.target.value);}}/><br /><br />
                                    <input
                                        type="username"
                                        placeholder="password"
                                        id="column1" 
                                        value={uname}
                                        onchange={(event)=>{setUname(event.target.value);}}/><br /><br />
                                        
                                        <input
                                        type="password"
                                        placeholder="password"
                                        id="column1" 
                                        value={pass}
                                        onchange={(event)=>{setPass(event.target.value);}}/><br /><br />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        id="column1" 
                                        value={phone}
                                        onchange={(event)=>{setPhone(event.target.value);}}
                                        /><br /><br />
                                    <select value={userType} onChange={handleUserTypeChange} id="column1" required>
                                        <option value="" disabled hidden>Usertype</option>
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                        onchange={(event)=>{setUserType(event.target.value);}}
                                        </select><br></br>
                                </form><br />
                                <span>Already have an account? <span onClick={() => navigate("/")}>Login</span></span>
                                <button  id="loginbutton" onClick={() =>onFinish} >Signup </button>
                    
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </form>
    );
}
