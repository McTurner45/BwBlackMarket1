import './calculator.css'

export default function Calculator() {

    return (
        <div className="calculator">
            <h3>How much do you need?</h3>
            <div className="calculator-values">
                <div className="range-value">
                    <p>Loan Needed : <b>BWP10000</b></p>
                    <input type="range" />
                </div>
                <div className="range-value">
                    <p>Months to pay</p>
                    <input type="range" />
                </div>
                <div className="value">
                    <span>Gross Salary</span>
                    <span><input type="text" /></span>
                </div>
                <div className="value">
                    <span>Net Salary</span>
                    <span><input type="text" /></span>
                </div>
                <div className="value">
                    <span>Allowances</span>
                    <span><input type="text" /></span>
                </div>
                <div className="value">
                    <span>Next Payment Date</span>
                    <span><input type="date" /></span>
                </div>
                <div className="value">
                    <span>Monthly Loan Repayment</span>
                    <span><input type="text" /></span>
                </div>
                <div className="value">
                    <span>Next Payment Date At</span>
                    <span><input type="date" /></span>
                </div>

                <div className="button-apply">
                    <p>Apply</p>
                </div>

            </div>
            {/* <div className="button-apply">
                <p>Apply Now</p>
            </div> */}
        </div>
    );
}