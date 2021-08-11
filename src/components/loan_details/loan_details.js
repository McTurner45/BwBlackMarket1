import { useState } from 'react';
import './loan_details.css'

export default function LoanDetails({visibility}) {

    const [personalDetailsVisible, setPersonalDetailsVisible] = useState(false)

    return (
        <section>
            <div className="loan-details">
                <h3>Loan Details</h3>
                <div className="loan-details-values">
                    <div className="loan-details-value">
                        <span> Loan Amount</span>
                        <span><input readOnly="true" type="text" placeholder="BWP00000" /></span>
                    </div>
                    <hr />
                    <div className="loan-details-value">
                        <span>Months to pay</span>
                        <span><input type="text" placeholder="BWP00000" /> </span>
                    </div>
                    <hr />
                    <div className="loan-details-value">
                        <span>Next payment date</span>
                        <span><input type="date" /> </span>
                    </div>
                    <hr />
                    <div className="loan-details-value">
                        <span>Monthly Installments</span>
                        <span><input type="text" /> </span>
                    </div>
                    <hr />
                    <div className="button-proceed">
                        <p>Save</p>
                    </div>
                </div>
            </div>
            <div className="employee-details">
                <h3>Employee Details</h3>
                <p>Are you a government employee?</p>
                <div className="employee-choices">
                    <span className="employee-choice">
                        <input type="radio" name="government_employee" value="yes" /> Yes
                    </span>
                    <span className="employee-choice">
                        <input type="radio" name="government_employee" value="no" /> No
                    </span>
                </div>
            </div>
            { visibility.newCustomer ?  <div className="personal-details">
                <h3>Personnal Details</h3>
                <div className="personal-details-values">
                    <input type="text" placeholder="Names" />
                    <input type="text" placeholder="Surname" />
                </div>
                <div className="personal-details-values">
                    <input type="text" placeholder="Phone Number" />
                    <input type="email" placeholder="Email Address" />
                </div>
                <div className="personal-details-values">
                    <input type="text" placeholder="ID Number" />
                    <input type="email" placeholder="Date of birth" />
                </div>
                <div className="personal-details-values">
                    <input type="text" placeholder="Marital Status" />
                    <input type="email" placeholder="Monthly Next Income" />
                </div>
            </div> : null}
        </section>
    );
}