import "./calculator.css";
import {useContext, useState, useEffect} from "react";
import {LoanContext} from "../../context";
import {Api} from "../../api";
import {useMutation} from "react-query";

export default function Calculator({calcLoanOptions}) {
    const loanContext = useContext(LoanContext);
    const [toggleRO, setToggleRO] = useState(false);

    // initialise api class
    const [api] = useState(new Api());
    // for getting loan calculation
    const {mutate, data, isLoading, isSuccess,  isError, error} = useMutation('calculateLoan', api.calculateLoan, {retry: 2});

    // handle states from mutation
    useEffect(() =>  {
        // @TODO -- change to alerts and remove success
        if (isLoading) console.log('loading');
        if (isSuccess) console.log('success');
        if (isError && error) console.log(error);
    },[isLoading, isError, isSuccess])

    const onApply = () => {
        setToggleRO(!toggleRO);
        // calcLoanOptions(loanContext);
        console.log(loanContext);

        let data = {
            Employer: "Central Government",
            NetPay: "45000",
            BasicSalary: "50000",
            GrossSalary: "55000",
            TotalFixedAllowances: "1000"
        };

        // call api
        mutate(loanContext);
    };

    if (isSuccess && data) {
        console.log('success')
        console.log(data)
    }
    if (isError && error) console.log(error)
    if (isLoading)  console.log('loading')

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
                        onChange={e => loanContext.changeInfo({employer: e.target.value})}
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
                    loanContext.changeInfo({basicSalary: e.target.value})
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
                    loanContext.changeInfo({grossSalary: e.target.value})
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
                    loanContext.changeInfo({netSalary: e.target.value})
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
                    loanContext.changeInfo({allowances: e.target.value})
                }
            />
          </span>
                </div>

                <div className="button-apply" onClick={onApply}>
                    {toggleRO ? <p>Change</p> : <p>Apply</p>}
                </div>
                {!toggleRO && (
                    <div style={{textAlign: "center", fontSize: "8px", color: "red"}}>
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
