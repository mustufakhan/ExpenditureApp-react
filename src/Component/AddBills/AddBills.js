import React, { useState, useContext } from 'react';
import { BillContext } from '../../Context/BillContext'
import "./style.css"
 
const AddBills = () => {
    const [newBillTitle, setnewBillTitle]= useState('')
    const [newBillCost, setnewBillCost]= useState('')

    const {updatebills} = useContext(BillContext)
      
    const Valid = ()=>{
    const costValid = newBillCost && Number.parseFloat(newBillCost)
    const titleValid = newBillTitle && newBillTitle.split('').find(char=> char!='');
    return titleValid && costValid
    }
    const clear = () =>{
        setnewBillCost('')
        setnewBillTitle('')
    }
    
        return (
            <div className="add-bill-container">
            <input className="add-bill-form-control form-control"
             placeholder="Enter Bill Title" 
             type="text" 
             value={newBillTitle} 
            onChange={(e)=> {setnewBillTitle(e.target.value)}}></input>

            <input className="add-bill-form-control form-control"
             placeholder="Enter Bill Cost" 
             type="number" 
             value={newBillCost} 
            onChange={(e)=> {setnewBillCost(e.target.value)}}></input>

            <button className="add-bill-form-control btn btn-primary"
             onClick={()=>{
                 if(Valid()){
                     updatebills({title:newBillTitle,monthlyCost:newBillCost, enabled: true})
                     clear();
                 }
                 else{
                     alert("fields cant be blank")
                 }
             }}
            >Add bills</button>
            </div>
        );
    }

 
export default AddBills ;