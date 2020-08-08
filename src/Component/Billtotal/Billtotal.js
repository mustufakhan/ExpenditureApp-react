import React,{useContext} from 'react';
import './style.css'
import { BillContext } from '../../Context/BillContext';

const Billtotal = () => {
    const {bills, costinterval} = useContext(BillContext)

    const moneytransform =(cost)=>{
    const monthlyCost = Number.parseFloat(cost);
    switch(costinterval){
          case 'Monthly':
          return monthlyCost
          case 'Yearly':
          return monthlyCost * 12  
          case 'Daily':
          return monthlyCost*12 /365 
          case 'Weekly':
          return monthlyCost*12 /52
          
          default:
              return 0
    }
    }
    return (
        <>
        <div className="bill-total-container">
          {costinterval} Bill Cost : 
          <span>
              {
                  bills.reduce((acc,val)=>{
                      return val.enabled  ?  moneytransform(val.monthlyCost) + acc : acc
                  },0).toFixed(2)
              }
              </span> 
        </div>
        <div className="bill-total-container">
          {costinterval} Saved : 
          <span>
              {
                  bills.reduce((acc,val)=>{
                      return !val.enabled  ?  moneytransform(val.monthlyCost) + acc : acc
                  },0).toFixed(2)
              }
              </span> 
        </div>
        </>
    );
}
 

 
export default Billtotal;