/*import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

export default function Seller() {
    const navigate = useNavigate();

    return (
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
                                <h1 id="details">Details of the Property</h1>
                                <form>
                                    <input
                                        type="text"
                                        placeholder='Name of the property'
                                        id="column1" /><br /><br />
                                    <input
                                        type="text"
                                        placeholder='Place'
                                        id="column1" /><br /><br />
                                    <input
                                        type="text"
                                        placeholder='Area'
                                        id="column1" /><br /><br />
                                    <input
                                        type="number"
                                        placeholder="Number of bedrooms"
                                        id="column1" /><br /><br />
                                    <input
                                        type="number"
                                        placeholder="Number of bathrooms"
                                        id="column1" /><br /><br />
                                    <input
                                        type="text"
                                        placeholder="Hospitals nearby"
                                        id="column1" /><br /><br />
                                    <input
                                        type="text"
                                        placeholder="Colleges nearby"
                                        id="column1" /><br /><br />
                                    <input
                                        type="text"
                                        placeholder="Cost of the property"
                                        id="column1" /><br /><br />
                                        <h1 id="details">Details of the Seller</h1>
                                        <br></br>
                                    <input
                                        type="text"
                                        placeholder="Name of the Seller"
                                        id="column1" /><br /><br />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id="column1" /><br /><br />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        id="column1" /><br /><br />
                                </form><br />
                                
                                <button type="submit" id="submitbutton">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
*/
import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


export default function Seller() {
   
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        propertyName: '',
        place: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        hospitals: '',
        colleges: '',
        cost: '',
        
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setPopupVisible(true);

    };

    return (
        <div id="imagehouse3">
            <div className="header">
                <h1 id="rentify">Rentify</h1>
            </div>

            <h2 id="slogan">Unlocking the door to your perfect home!</h2>
            <div id="moving table">
                <table id="table1">
                    <tbody>
                        <tr>
                            <td>
                                <h1 id="details">Details of the Property</h1>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder='Name of the property'
                                        id="propertyName"
                                        value={formData.propertyName}
                                        onChange={handleChange} /><br /><br />
                                    <input
                                        type="text"
                                        placeholder='Place'
                                        id="place"
                                        value={formData.place}
                                        onChange={handleChange} /><br /><br />
                                    <input
                                        type="text"
                                        placeholder='Area'
                                        id="area"
                                        value={formData.area}
                                        onChange={handleChange} /><br /><br />
                                    <input
                                        type="number"
                                        placeholder="Number of bedrooms"
                                        id="bedrooms"
                                        value={formData.bedrooms}
                                        onChange={handleChange} /><br /><br />
                                    <input
                                        type="number"
                                        placeholder="Number of bathrooms"
                                        id="bathrooms"
                                        value={formData.bathrooms}
                                        onChange={handleChange} /><br /><br />
                                    <input
                                        type="text"
                                        placeholder="Hospitals nearby"
                                        id="hospitals"
                                        value={formData.hospitals}
                                        onChange={handleChange} /><br /><br />
                                    <input
                                        type="text"
                                        placeholder="Colleges nearby"
                                        id="colleges"
                                        value={formData.colleges}
                                        onChange={handleChange} /><br /><br />
                                    <input
                                        type="text"
                                        placeholder="Cost of the property"
                                        id="cost"
                                        value={formData.cost}
                                        onChange={handleChange} /><br /><br />
                                    <h1 id="details">Details of the Seller</h1>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Name of the Seller"
                                        id="sellerName"
                                         /><br /><br />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                         /><br /><br />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        id="phone"
                                       
                                      /><br /><br />
                                    <button type="submit" id="submitbutton">Submit</button>
                                    <button type="reset" id="submitbutton">Reset</button>
                                </form><br />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {submittedData && (
                <div id="submitted-data">
                    <h2 id="details">Details of the property</h2>
                    <table>
                        <tbody>
                            <tr><td>Name of the property:</td><td>{submittedData.propertyName}</td></tr>
                            <tr><td>Place:</td><td>{submittedData.place}</td></tr>
                            <tr><td>Area:</td><td>{submittedData.area}</td></tr>
                            <tr><td>Number of bedrooms:</td><td>{submittedData.bedrooms}</td></tr>
                            <tr><td>Number of bathrooms:</td><td>{submittedData.bathrooms}</td></tr>
                            <tr><td>Hospitals nearby:</td><td>{submittedData.hospitals}</td></tr>
                            <tr><td>Colleges nearby:</td><td>{submittedData.colleges}</td></tr>
                            <tr><td>Cost of the property:</td><td>{submittedData.cost}</td></tr>
                          
                        </tbody>
                    </table>
                </div>
            )}
             {popupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Success!</h3>
                        <p>Your property is successfully registered.</p>
                        <button id="submitbutton" onClick={()=>navigate("/home")}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}