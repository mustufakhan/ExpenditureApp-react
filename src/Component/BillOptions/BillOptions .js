import React,{useContext} from 'react';
import './style.css'
import { BillContext } from '../../Context/BillContext';

const BillOptions = () => {
    const { costinterval, setcostinterval } = useContext(BillContext);

    return (
      <div className='interval-option-container'>
        <div className={costinterval === 'Daily' ? 'selected-interval' : 'interval'}
          onClick={(e) => setcostinterval(e.target.innerText)}>
          Daily
        </div>
        <div className={costinterval === 'Monthly' ? 'selected-interval' : 'interval'}
          onClick={(e) => setcostinterval(e.target.innerText)}>
          Monthly
        </div>
        <div className={costinterval === 'Yearly' ? 'selected-interval' : 'interval'}
          onClick={(e) => setcostinterval(e.target.innerText)}>
          Yearly
        </div>
      </div>
    );
  };
 

 
export default BillOptions;