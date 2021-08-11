import Header from './components/header/header'
import Calculator from './components/calculator/calculator'
import LoanDetails from './components/loan_details/loan_details'
import { useState } from 'react';
import { LoanContext } from "./context";
import Landing from './components/landing/landing';
import Footer from './components/footer/footer';


function App() {

  const [visibility, setVisibility] = useState({
    newCustomer : false,
    existingCustomer : false,
  });
  const [info, setInfo] = useState({
    loanNeeded: 0,
    monthsToPay: 1,
    grossSalary: 0,
    netSalary: 0,
    allowances: 0,
    nextPaymentDate: Date("01/01/2022"),
    monthlyLoanRepayment: 0,
    nextPaymentDateAt: Date("01/01/2022"),
    governmentEmployee: null,
    names: null,
    surname: null,
    phoneNumber: null,
    emailAddress: null,
    omang: null,
    dob: null,
    mariatalStatus: null,

  })

  const changeInfo = (obj) => {
    setInfo(prev => {
      return {
        ...prev,
        ...obj
      }
    });
  }

  const toggleInvisibleExisting = () => {
    setVisibility(prev => {
      return {
        ...prev,
        existingCustomer: true
      }
    } );
  }

  const toggleInvisibleNew = () => {
    setVisibility(prev => {
      return {
        ...prev,
        newCustomer: true
      }
    } );
  }


  // const calculatorComponent = 

  return (
    <LoanContext.Provider value={{ ...info, changeInfo }}>
      <div className="App">
        <Header toggleInvisibleExisting={toggleInvisibleExisting} toggleInvisibleNew={toggleInvisibleNew} />
       { visibility ?  <div className="calculator-section">
          {visibility.existingCustomer || visibility.newCustomer? <Calculator /> : null}
        </div> : null}

        {visibility.existingCustomer || visibility.newCustomer  ? <LoanDetails visibility={visibility} /> : <Landing />}
        {/* {<Footer />} */}
      </div>
    </LoanContext.Provider>
  );
}

export default App;
