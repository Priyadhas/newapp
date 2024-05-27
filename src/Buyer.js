import './App.css';
export default function Buyer()
{
    return(
        <div id="imagehouse1">
             <div className="header">
                <h1 id="rentify">Rentify</h1>
            </div>
            <br></br>
            <h2 id="slogan">Unlocking the door to your perfect home!</h2>
            <table className='buyertable'>
                <tr>
                    <td>
                    <img id= "images"src="house3.jpg"></img>
                    </td>
                    <td>
                    <table>
                        <tbody>
                            <tr><td>Name of the property:</td><td>Luxurious Villa</td></tr>
                            <tr><td>Place:</td><td>Kanyakumari</td></tr>
                            <tr><td>Area:</td><td>11/158A Vencode</td></tr>
                            <tr><td>Number of bedrooms:</td><td>4</td></tr>
                            <tr><td>Number of bathrooms:</td><td>5</td></tr>
                            <tr><td>Hospitals nearby:</td><td>Bethany Medical Hosptial</td></tr>
                            <tr><td>Colleges nearby:</td><td>arunachala College of engineering</td></tr>
                            <tr><td>Cost of the property:</td><td>85 lakhs</td></tr>
                          
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr><button id="interest">I'm Interested</button></tr>
            </table>
        </div>

    );
}