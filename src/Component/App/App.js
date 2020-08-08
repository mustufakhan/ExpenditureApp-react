import React from 'react';  
import './App.css';
import AddBills from '../AddBills/AddBills';
import { BillProvider } from '../../Context/BillContext';
import Billslist from '../Billslist/Billslist'
import Billtotal from '../Billtotal/Billtotal'
import BillOptions from '../BillOptions/BillOptions '

const App  = () =>{

  return (
    <div className="bill-container"> 
    
    <BillProvider>
    <BillOptions/> 
    <AddBills/>
    <Billtotal/>
    <Billslist/>
    </BillProvider>
    </div>
  );
}

export default App;
