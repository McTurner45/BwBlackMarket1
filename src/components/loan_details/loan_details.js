import {useState, useContext} from 'react';
import './loan_details.css'
import Modal from "react-modal";
import Button from "../header/button";
import {LoanContext} from "../../context";

export default function LoanDetails({visibility, info}) {
    // get change info from loan context -- used with inputs
    const {changeInfo} = useContext(LoanContext);
    const [employmentDetails, setEmploymentDetails] = useState(false)
    const [agreement, setAggrement] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const showDialog = () => {
        setIsOpen(!isOpen);
    }

    // processes value of gov. employee radio button and updates info
    const processRadio = (e) => {
        const target = e.target;
        // check if gov employee radio
        if (target.name === 'government_employee') {
            // set info to this value
            changeInfo({governmentEmployee: target.value})
        }

        // check if marital status
        if (target.name === 'maritalStatus') {
            changeInfo({maritalStatus: target.value})
        }
    }

    return (
        <section>
            <div className="loan-details">
                <h3>Loan Details</h3>
                <div className="loan-details-values">
                    <div className="loan-details-value">
                        <span> Loan Amount</span>
                        <span><input readOnly="true" type="text" placeholder="BWP00000"
                                     value={`BWP ${info.loanNeeded}`}/></span>
                    </div>
                    <hr/>
                    <div className="loan-details-value">
                        <span>Months to pay</span>
                        <span><input readOnly="true" type="text" placeholder="0 months"
                                     value={`${info.monthsToPay} months`}/> </span>
                    </div>
                    <hr/>
                    {/* <div className="loan-details-value">
                        <span>Next payment date</span>
                        <span><input readOnly="true" type="date" value={info.} /> </span>
                    </div> */}
                    {/* <hr /> */}
                    <div className="loan-details-value">
                        <span>Monthly Installments</span>
                        <span><input type="text"/> </span>
                    </div>
                    <hr/>
                    <br/>
                    <div style={{textAlign: 'left', fontSize: '8px', color: 'red'}}>
                        <p>**This application serves as only a quotation and is therefore non-binding</p>
                    </div>
                    <br/>
                    <div>
                        <div>
                            <input type='checkbox' checked={agreement} onChange={() => setAggrement(!agreement)}/> I
                            have read and understand the terms and conditions
                        </div>
                        {agreement ? <div className="buttons">
                            <div className="button-proceed button-space">
                                <p>Change</p>
                            </div>
                            {visibility.newCustomer ? (<div className="button-proceed button-space"
                                                            onClick={() => setEmploymentDetails(!employmentDetails)}>
                                <p>Proceed</p>
                            </div>) : (<div className="button-proceed button-space"
                                            onClick={() => showDialog()}>
                                <p>Submit</p>
                            </div>)
                            }
                        </div> : null}
                    </div>

                </div>
            </div>

            {employmentDetails &&
            <div className="employee-details">
                <h3>Employee Details</h3>
                <p>Are you a government employee?</p>
                <div className="employee-choices">
                    <span className="employee-choice">
                        <input type="radio" name="government_employee" value="yes" onChange={(e) => processRadio(e)}/> Yes
                    </span>
                    <span className="employee-choice">
                        <input type="radio" name="government_employee" value="no" onChange={(e) => processRadio(e)}/> No
                    </span>
                </div>
            </div>
            }

            {visibility.newCustomer && employmentDetails &&
            <div className="personal-details">
                <h3>Personnal Details</h3>
                <div className="personal-details-values">
                    <input type="text" placeholder="First Names" onChange={e => changeInfo({names: e.target.value})}/>
                    <input type="text" placeholder="Surname" onChange={e => changeInfo({surname: e.target.value})}/>
                </div>
                <div className="personal-details-values">
                    <input type="text" placeholder="Phone Number"
                           onChange={e => changeInfo({phoneNumber: e.target.value})}/>
                    <input type="email" placeholder="Email Address"
                           onChange={e => changeInfo({emailAddress: e.target.value})}/>
                </div>
                <div className="personal-details-values">
                    <input type="text" placeholder="ID Number" onChange={e => changeInfo({omang: e.target.value})}/>
                    <input type="email" placeholder="Date of birth" onChange={e => changeInfo({dob: e.target.value})}/>
                </div>
                <div className="personal-details-values">
                    <input type="text" placeholder="Marital Status"
                           onChange={e => changeInfo({maritalStatus: e.target.value})}/>
                    {/* <input type="email" placeholder="Monthly Next Income" /> */}
                </div>


                <br/>
                <div className="button-proceed button-space"
                     style={{
                         display: 'flex',
                         justifyContent: 'center'
                     }}
                     onClick={() => showDialog()}>
                    <p>Submit</p>
                </div>
            </div>
            }
            <Modal
                isOpen={isOpen}
                onRequestClose={showDialog}
                contentLabel="My dialog"
                className="modal"
                overlayClassName="myoverlay"
            >

                <div className="membership-modal">
                    <div className="close" onClick={showDialog}>close</div>
                    <div style={{textAlign: 'center'}} className="title"><h1>Thank you, please wait for a call from one
                        of our agents</h1></div>
                    <br/>
                    <div className="proceed" style={{justifyContent: 'center'}}>
                        <Button
                            label="Done"
                            // later use to refresh page -- temporarily use to close modal
                            onclick={() => setIsOpen(false)}
                        />
                    </div>
                </div>
            </Modal>
        </section>
    );
}