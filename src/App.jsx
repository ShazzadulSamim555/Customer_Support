import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Tickets from './add/Tickets';
import CustomerTck from './add/CustomerTck';
import Footer from './add/Footer';

const App = () => {

  const [customers, setCustomers]=useState([]);
  const [btnProgress, setBtnProgress]=useState([]);

  const handleProgress=(addHandle)=>{
    const isExist= btnProgress.find(item=> item.id === addHandle.id);

    if(!isExist){
      setBtnProgress([...btnProgress,addHandle]);
    }
    else{
      alert("This Ticket is already progress.");
    }
  };

  console.log(btnProgress);

  useEffect(()=>{
    fetch('/customer.json')
    .then(res=> res.json())
    .then(data=> setCustomers(data))
  },[]);


  return (
    <div>
      <Navbar></Navbar>

      <div className='bg-blue-50 py-10 space-y-20'>
        <Tickets></Tickets>
        <CustomerTck btnProgress={btnProgress} setBtnProgress={setBtnProgress} customers={customers} handleProgress={handleProgress}></CustomerTck>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;