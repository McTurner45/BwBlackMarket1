import "./calculator.css";
import { useContext, useState } from "react";
import { LoanContext } from "../../context";

export default function Calculator({ calcLoanOptions }) {
  const loanContext = useContext(LoanContext);
  const [toggleRO, setToggleRO] = useState(false);

  const onApply = () => {
    setToggleRO(!toggleRO);
    calcLoanOptions(loanContext);
  };

  return (
    <div className="calculator">
      <h3>How much do you need?</h3>
      <div className="calculator-values">
        <div className="value">
          <span>Employer</span>
          <input
            readOnly={toggleRO}
            type="text"
            value={loanContext.employer}
            onChange={e => loanContext.changeInfo({ employer: e.target.value })}
          />
        </div>
        <div className="value">
          <span>Basic Salary</span>
          <span>
            <input
              readOnly={toggleRO}
              type="number"
              value={loanContext.basicSalary}
              onChange={e =>
                loanContext.changeInfo({ basicSalary: e.target.value })
              }
            />
          </span>
        </div>
        <div className="value">
          <span>Gross Salary</span>
          <span>
            <input
              readOnly={toggleRO}
              type="number"
              value={loanContext.grossSalary}
              onChange={e =>
                loanContext.changeInfo({ grossSalary: e.target.value })
              }
            />
          </span>
        </div>
        <div className="value">
          <span>Net Salary</span>
          <span>
            <input
              readOnly={toggleRO}
              type="number"
              value={loanContext.netSalary}
              onChange={e =>
                loanContext.changeInfo({ netSalary: e.target.value })
              }
            />
          </span>
        </div>
        <div className="value">
          <span>Allowances</span>
          <span>
            <input
              readOnly={toggleRO}
              type="number"
              value={loanContext.allowances}
              onChange={e =>
                loanContext.changeInfo({ allowances: e.target.value })
              }
            />
          </span>
        </div>

        <div className="button-apply" onClick={onApply}>
          {toggleRO ? <p>Change</p> : <p>Apply</p>}
        </div>
        {!toggleRO && (
          <div style={{ textAlign: "center", fontSize: "8px", color: "red" }}>
            <p>
              **This application serves as only a quotation and is therefore
              non-binding
            </p>
          </div>
        )}
      </div>
      {/* <div className="button-apply">
                <p>Apply Now</p>
            </div> */}
    </div>
  );
}
