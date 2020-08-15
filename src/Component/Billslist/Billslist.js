import React,{useContext} from 'react';
import './style.css'
import { BillContext } from '../../Context/BillContext';
 
const Billslist = () =>{
    const {bills, editbills, setEditModeEnabled}= useContext(BillContext)
    return(
       <div className="bill-list-container">
            <h6 className='edit-mode-btn' onClick={() => setEditModeEnabled(true)}>Edit</h6>
           {
            bills.map((bill,index)=>{
                return(
                    <div key={index} className="bill-list-row">
                        <input type="checkbox" className="form-check-input" checked={bill.enabled} onChange={()=> editbills({
                                title:bill.title,
                                monthlyCost:bill.monthlyCost,
                                enabled:!bill.enabled
                        })} ></input>
                        <div className="bill-content"></div> 
                        {bill.title}-{bill.monthlyCost}rupee
                    </div>
                )
            })
           }
       </div>    
    )
}
export default Billslist