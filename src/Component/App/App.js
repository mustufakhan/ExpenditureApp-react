import React,{useContext} from 'react';  
import './App.css';
import AddBills from '../AddBills/AddBills';
import { BillContext } from '../../Context/BillContext';
import Billslist from '../Billslist/Billslist'
import Billtotal from '../Billtotal/Billtotal'
import BillOptions from '../BillOptions/BillOptions '
import Editbills from '../Editbills/Editbills';

const App  = () =>{
  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className='bills-container'>
      {
        editModeEnabled ? <Editbills /> : <span><BillOptions /><AddBills /><Billtotal /><Billslist /></span>
      }
    </div>
  );
}

export default App;
