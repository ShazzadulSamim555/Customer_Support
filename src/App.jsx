import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Tickets from "./add/Tickets";
import CustomerTck from "./add/CustomerTck";
import Footer from "./add/Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [btnProgress, setBtnProgress] = useState([]);

  const [resolved, setResolved] = useState([]);

  const handleProgress = (addHandle) => {
    const isExist = btnProgress.find((item) => item.id === addHandle.id);

    if (!isExist) {
      setBtnProgress([...btnProgress, addHandle]);
      toast.success(`${addHandle.title} is added`)
    } else {
      toast.error(`ID: ${addHandle.id} is already in progress.`);
    }
  };

  const addResolved = (resolve) => {
    setResolved([...resolved, resolve]);

    // Task Status (Progress) লিস্ট থেকে ঐ টাস্কটি মুছে ফেলা (Filter ব্যবহার করে)
    const remainingProgress = btnProgress.filter(
      (item) => item.id !== resolve.id,
    );
    setBtnProgress(remainingProgress);

    toast.success(`Complete ${resolve.id}`)
  };
  // console.log(resolved);

  //   useEffect(() => {
  //   console.log("Resolved Array:", resolved);
  // }, [resolved]);

  useEffect(() => {
    fetch("/customer.json")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-blue-50 py-10 space-y-20">
        <Tickets btnProgress={btnProgress} resolved={resolved}></Tickets>
        <CustomerTck
          setResolved={setResolved}
          addResolved={addResolved}
          btnProgress={btnProgress}
          setBtnProgress={setBtnProgress}
          customers={customers}
          handleProgress={handleProgress}
          resolved={resolved}
        ></CustomerTck>
      </div>
      <Footer></Footer>

      <ToastContainer 
      position="top-center"
      autoClose={2000}
      
      />
    </div>
  );
};

export default App;
