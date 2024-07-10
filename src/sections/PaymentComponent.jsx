import React, { useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import Navbar from "../components/Navbar"
const PaymentComponent = () => {
    const [customerEmail, setCustomerEmail]= useState('');
    const [customerName, setCustomerName]= useState('')
    const [customerNumber, setCustomerNumber]= useState('');
    const [amount, setAmount]= useState('')
    const [isInfoValid, setIsInfoValid]= useState(false)
    const key= 'FLWPUBK-93cffef24b43f1eba8c140391fd3d720-X'
    

        const handleChangeEmail= (e)=> {
        setCustomerEmail(e.target.value)
    }
    const handleChangeNumber= (e)=> {
        setCustomerNumber(e.target.value)
    }
        const handleChangeName= (e)=> {
        setCustomerName(e.target.value)
    }
        const handleChangeAmount= (e)=> {
        setAmount(e.target.value)
    }

    const handleInfoSubmit=()=> {
        if(customerEmail==='' && customerName==='' && customerNumber===''&& amount <= 19.9 || customerEmail === ''){
            alert('Please fill out all the necessary information');
            setIsInfoValid(false);
        }
        else{
            setIsInfoValid(true)
        }
    }

       const config = {
    public_key: key,
    tx_ref: Date.now(),
    amount: 10,
    currency: 'USD',
    payment_options: 'card, mobilemoney ,ussd, banktransfer',
    customer: {
      email: customerEmail,
      phone_number:customerNumber,
      name: customerName,
    },
    customizations: {
      title: 'Music Lab',
      description: 'Subscribe',
      logo: '/logo.jpeg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Subscribe',
    callback: (response) => {
      if(response.status !== "completed") {
        console.log("failed Transaction");
      }
      else{
        console.log("Success")
      }
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {
        console.log("User Closed it Himself")
    },
  };

  return (
    <section className='font-montserrat font-medium bg-zinc-800 '>
        {!isInfoValid ? (
              <div className='bg-white'>
                <section>
                  <Navbar/>
                </section>
                    <div className='flex justify-center items-center flex-col mt-36'>
                         <h1 className="text-2xl font-semibold mb-4 text-center">Music Lab Subscription Portal </h1>
                        <p className="mb-4 w-[80%] mx-auto text-center">Kindly enter Your Name, Your email, Your Phone Number and  the amount you would like to pay in NGN</p>
                    </div>
                    <div className='flex flex-col gap-5 mt-10 items-center'>
                        <input 
                        type="text"
                        placeholder="Enter Your Name"
                        value={customerName}
                        onChange={handleChangeName}
                        className="lg:w-[50%] w-[60%] p-2 mb-4 border border-neutral-300 rounded"
                        required
                         />

                        <input 
                        type="email"
                        placeholder="Enter Your Email Address"
                        value={customerEmail}
                        onChange={handleChangeEmail}
                        className="lg:w-[50%] w-[60%] p-2 mb-4 border border-neutral-300 rounded lg:text-lg text-sm"
                        required
                         />

                        <input 
                        type="number"
                        placeholder="Enter Your phone Number"
                        value={customerNumber}
                        onChange={handleChangeNumber}
                        className="lg:w-[50%] w-[60%] p-2 mb-4 border border-neutral-300 rounded"
                        required
                         />

                        <input 
                        type="number"
                        placeholder="Enter Your Amount"
                        value={amount}
                        onChange={handleChangeAmount}
                        className="lg:w-[50%] w-[60%] p-2 mb-4 border border-neutral-300 rounded"
                        required
                         />

                         <button
                         onClick={handleInfoSubmit}
                        className="w-[40%] bg-neutral-500 text-white py-2 rounded hover:bg-neutral-600"
                         
                         >
                            Pay

                         </button>
                    </div>
                </div>
        ): 

        (
            <div >
              
                <div className="flex flex-col items-center justify-center min-h-screen b w-[80%] mx-auto lg:w-[40%]">
                    <div className="bg-white p-10 rounded-lg shadow-md w-80 ">
                 <h1 className="text-2xl font-bold text-center mb-4 w-[90%]">Music Lab</h1>
                 <h2 className="text-xl font-semibold text-center mb-4">Confirm Your Payment</h2>
            <div className="text-left mb-4">
            <strong>Name:</strong> {customerName}
        </div>
        <div className="text-left mb-4 ">
          <strong>Email:</strong> {customerEmail}
        </div>
        <div className="text-left mb-4">
          <strong>Phone:</strong> {customerNumber}
        </div>
        <div className="text-left mb-4">
          <strong>Amount:</strong> ${amount}
        </div>
        {import.meta.env.VITE_PUBLIC_KEY}
        <div className="mt-6 text-center">
          <button
            
            className="bg-neutral-500 text-white px-4 py-2 rounded-md hover:bg-neutral-600"
          >
             <FlutterWaveButton {...fwConfig} />
          </button>
        </div>
      </div>
    </div>
            </div>
        )}
    </section>
    
  );


    
 
};

export default PaymentComponent;
