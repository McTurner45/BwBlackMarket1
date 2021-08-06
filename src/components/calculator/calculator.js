import './calculator.css'
import { useContext, useState } from "react";
import { LoanContext } from '../../context'

export default function Calculator() {

    const loanContext = useContext(LoanContext);
    const [toggleRO, setToggleRO] = useState(false);

    return (
        <div className="calculator">
            <h3>How much do you need?</h3>
            <div className="calculator-values">
                <div className="range-value">
                    <p>Loan Needed : <b>BWP {loanContext.loanNeeded}</b></p>
                    <input readOnly={toggleRO} type="range" max="100000" value={loanContext.loanNeeded} onChange={e => loanContext.changeInfo({ loanNeeded: e.target.value })} />
                </div>
                <div className="range-value">
                    <p>Months to pay : {loanContext.monthsToPay} months</p>
                    <input readOnly={toggleRO} type="range" max="24" value={loanContext.monthsToPay} onChange={e => loanContext.changeInfo({ monthsToPay: e.target.value })} />
                </div>
                <div className="value">
                    <span>Gross Salary</span>
                    <span><input readOnly={toggleRO} type="text" value={loanContext.grossSalary} onChange={e => loanContext.changeInfo({ grossSalary: e.target.value })} /></span>
                </div>
                <div className="value">
                    <span>Net Salary</span>
                    <span><input readOnly={toggleRO} type="text" value={loanContext.netSalary} onChange={e => loanContext.changeInfo({ netSalary: e.target.value })} /></span>
                </div>
                <div className="value">
                    <span>Allowances</span>
                    <span><input readOnly={toggleRO} type="text" value={loanContext.allowances} onChange={e => loanContext.changeInfo({ allowances: e.target.value })} /></span>
                </div>
                <div className="value">
                    <span>Next Payment Date</span>
                    <span><input readOnly={toggleRO} type="date" value={loanContext.nextPaymentDate} onChange={e => loanContext.changeInfo({ nextPaymentDate: e.target.value })} /></span>
                </div>
                <div className="value">
                    <span>Monthly Loan Repayment</span>
                    <span><input readOnly={toggleRO} type="text" value={loanContext.monthlyLoanRepayment} onChange={e => loanContext.changeInfo({ monthlyLoanRepayment: e.target.value })} /></span>
                </div>
                <div className="value">
                    <span>Next Payment Date At</span>
                    <span><input readOnly={toggleRO} type="date" value={loanContext.nextPaymentDateAt} onChange={e => loanContext.changeInfo({ nextPaymentDateAt: e.target.value })} /></span>
                </div>

                <div className="button-apply" onClick={() => setToggleRO(!toggleRO)}>
                    {toggleRO ? <p>Change</p> : <p>Apply</p>}
                </div>

            </div>
            {/* <div className="button-apply">
                <p>Apply Now</p>
            </div> */}
        </div>
    );
}