import React from 'react';
import Navbar from './Navbar';
import Tickets from './add/Tickets';
import CustomerTck from './add/CustomerTck';
import Footer from './add/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className='bg-blue-50 py-10 space-y-20'>
        <Tickets></Tickets>
        <CustomerTck></CustomerTck>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;