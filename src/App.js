import Header from './components/header/header'
import Calculator from './components/calculator/calculator'
import LoanDetails from './components/loan_details/loan_details'
import { useState } from 'react';
import { LoanContext } from "./context";


function App() {

  const [loanDetailsIsVisible, setLoanDetailsIsVisible] = useState(false);
  const [info, setInfo] = useState({
    loanNeeded: 0,
    monthsToPay: 1,
    grossSalary: 0,
    netSalary: 0,
    allowances: 0,
    nextPaymentDate: Date("01/01/2022"),
    monthlyLoanRepayment: 0,
    nextPaymentDateAt: Date("01/01/2022"),
  })

  const changeInfo = (obj) => {
    setInfo(prev => {
      return {
        ...prev,
        ...obj
      }
    });
  }

  const toggleInvisible = () => {
    setLoanDetailsIsVisible(true);
  }

  return (
    <LoanContext.Provider value={{ ...info, changeInfo }}>
      <div className="App">
        <Header toggleInvisible={toggleInvisible} />
        <div className="calculator-section">
          <Calculator />
        </div>

        {loanDetailsIsVisible ? <LoanDetails /> : <h1>Placeholder</h1>}

      </div>
    </LoanContext.Provider>
  );
}

export default App;
