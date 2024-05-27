import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {Call,Change} from './Call';

export default function Home() {
    const navigateBuyer = useNavigate();
    const navigateSeller = useNavigate();

    return (
        <div id="imagehouse3">
            <div className="header">
                <h1 id="rentify">Rentify</h1>
            </div>
            <table>
                <tr>
                    <td>

                   
            <div>
            <Call/>
            </div>

            <div id="buttons">
                <button onClick={() => navigateBuyer("/buyer")} id="buyer-button"><b>Buyer</b></button>
                <button onClick={() => navigateSeller("/seller")} id="seller-button"><b>Seller</b></button>
            </div>
            </td>

            <td>
                 <Change/>
                
            </td>
                </tr>
            </table>
                
        </div>
    );
}
