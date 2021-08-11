import './landing.css';




export default function Landing() {

    return (
        <div>
            <div className="box"></div>
            <div className="subtitle">Get to know us</div>
            <div className="landing-intro">
                <h1>Get a loan up to P500 000 </h1>
                <br />
                <div>
                    <h2>You will need these documents when applying for your personal loan</h2>
                    <br />
                    <p>
                        <ul>
                            <li>Omang or passport</li>
                            <li>Latest Payslip</li>
                            <li>Last 3 months bank statement</li>
                        </ul>
                    </p>
                </div>
            </div>
            <br />
            <div className="landing-intro">
                <h1>Steps to apply a loan </h1>
                <br />
                <div className="steps">
                    <h2>Step 1 : Register and activate your free Bayport account</h2>
                    <p>
                        You will need to provide us with your contact details and create a password for your Bayport account. You will then receive an email to activate your account – once received, click the ‘activate account’ button and proceed to login.
                    </p>
                </div>
                <br />
                <div className="steps">
                    <h2>Step 2 :  Login and apply</h2>
                    <p>
                        Once you login, you can start your online loan application by telling us a bit more about yourself, such as your income and expenditure details, your employment information and banking details. For faster response, please have your documents (listed below) ready for uploading.
                    </p>
                </div>
                <br />
                <div className="steps">
                    <h2>Step 3 : Affordability assessment</h2>
                    <p>
                        After you have uploaded your documents and have submitted your application, we verify the information provided with the credit bureau. We then check how much you qualify for based on your affordability.
                    </p>
                </div>
                <br />
                <div className="steps">
                    <h2>Step 4 : Sign your contract online</h2>
                    <p>
                        Once we grant you a loan offer, you will need to login and accept your loan offer and the terms and conditions online. We will email you a copy of your terms and conditions.
                    </p>
                </div>
                <br />
                <div className="steps">
                    <h2>Step 5 : Receive your personal loan</h2>
                    <p>
                        We disburse our personal loans in real-time, meaning, as soon as you accept your offer and your application passes final assessment, we will pay your funds into your bank account.
                    </p>
                </div>
                <br />
            </div>
        </div>
    )
}