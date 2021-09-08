import Header from "./components/header/header";
import Calculator from "./components/calculator/calculator";
import LoanDetails from "./components/loan_details/loan_details";
import {useState} from "react";
import {LoanContext} from "./context";
import Landing from "./components/landing/landing";
import Footer from "./components/footer/footer";
import {QueryClient, QueryClientProvider, useMutation} from "react-query";
import {Api} from "./api";

// for react query -- Create a client
const queryClient = new QueryClient();

function App() {
    const [visibility, setVisibility] = useState({
        newCustomer: false,
        existingCustomer: false
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
        maritalStatus: null
    });

    const [loanOptions, setLoanOptions] = useState();

    const changeInfo = obj => {
        setInfo(prev => {
            return {
                ...prev,
                ...obj
            };
        });
    };

    const toggleInvisibleExisting = () => {
        setVisibility(prev => {
            return {
                ...prev,
                existingCustomer: true
            };
        });
    };

    const toggleInvisibleNew = () => {
        setVisibility(prev => {
            return {
                ...prev,
                newCustomer: true
            };
        });
    };

    const calcLoanOptions = loanContext => {
        let url = "http://10.16.32.26:443/calculateLoan";

        let formData = {
            Employer: "Central Government",
            NetPay: "45000",
            BasicSalary: "50000",
            GrossSalary: "55000",
            TotalFixedAllowances: "1000"
        };

        // call api
        // mutate({data: formData});

        // console.log(formData);
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // })
        //     .then(response => response.text)
        //     .then(responseText => {
        //         alert(responseText);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    };



    return (
        // wrap everything in react query provider
        <QueryClientProvider client={queryClient}>
            <LoanContext.Provider value={{...info, changeInfo}}>
                <div className="App">
                    <Header
                        toggleInvisibleExisting={toggleInvisibleExisting}
                        toggleInvisibleNew={toggleInvisibleNew}
                    />
                    {visibility ? (
                        <div className="calculator-section">
                            {/*{visibility.existingCustomer || visibility.newCustomer? <Calculator /> : null}*/}
                            <Calculator calcLoanOptions={calcLoanOptions}/>
                        </div>
                    ) : null}

                    {visibility.existingCustomer || visibility.newCustomer ? (
                        <LoanDetails visibility={visibility} info={info}/>
                    ) : (
                        <Landing/>
                    )}
                    {/* {<Footer />} */}
                </div>
            </LoanContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
