import React,{createContext, useEffect, useState} from 'react';

const BillContext = createContext();

const BillProvider = ({children})=>{

    const [bills, setbills] = useState([])
    const [costinterval, setcostinterval] = useState('Monthly'); 
    const [editModeEnabled, setEditModeEnabled] = useState(false);   

    useEffect(() => {
      setbills(JSON.parse(localStorage.getItem('bills')) || []);
    }, [setbills])

    useEffect(()=>{
        console.log(bills)
    }, [bills])

    const updatebills = (bill) =>{
    const updatedbills = [...bills, bill];
    localStorage.setItem('bills', JSON.stringify(updatedbills))
    setbills(updatedbills)
    }

    const order=(bills)=>{
        return bills.sort((a,b)=>
            a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0)
    }

    const editbills =(billtoupdate)=>{
        const billsfiltered = bills.filter((bills)=>bills.title !== billtoupdate.title)
        const updatedbills = order( [
       ...billsfiltered,
           billtoupdate
        ])
        console.log("updatedbills",updatedbills)
        localStorage.setItem('bills', JSON.stringify(updatedbills))
        setbills(updatedbills)
    }
    const deleteBill = (billToDelete) => {
        const updatedBills = bills.filter((bill) => bill.title !== billToDelete.title);
        localStorage.setItem('bills', JSON.stringify(updatedBills))
        setbills(updatedBills)
      };
    return(
        <BillContext.Provider value={{
            bills,
            updatebills,
            editbills,
            costinterval,
            setcostinterval,
            setEditModeEnabled,
            editModeEnabled,
            deleteBill
        }}>
         {children}
        </BillContext.Provider>
    )
}
export {
BillContext,
BillProvider
};