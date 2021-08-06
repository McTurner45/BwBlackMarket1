import Header from './components/header/header'
import Calculator from './components/calculator/calculator'
import LoanDetails from './components/loan_details/loan_details'
import { useState } from 'react';

function App() {

  const [loanDetailsIsVisible, setLoanDetailsIsVisible] = useState(false);

  const toggleInvisible = () => {
    setLoanDetailsIsVisible(true);
  }

  return (
    <div className="App">
      <Header toggleInvisible={toggleInvisible} />
      <div className="calculator-section">
        <Calculator />
      </div>

      {loanDetailsIsVisible ? <LoanDetails /> : <h1>Placeholder</h1>}

    </div>
  );
}

export default App;
