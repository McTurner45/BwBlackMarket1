import './header.css'
import { useRef, useState } from 'react';
import Modal from "react-modal";
import Button from './button';

Modal.setAppElement("#root");

export default function Header({ toggleInvisible }) {

    const [isOpen, setIsOpen] = useState(false);

    const [cycle, setStateCycle] = useState("start")

    const [membership, setMembership] = useState('no');

    const [isButtonVisible, setButtonVisible] = useState(true)

    const applyButton = useRef()

    const changeCycle = (value) => {
        setStateCycle(value);
    }

    const toggleVisibility = () => {
        toggleInvisible();
        setIsOpen(false);
    }

    const toggleModal = () => {
        setStateCycle("start");
        setIsOpen(!isOpen);
        // console.log(applyButton.current)
        setButtonVisible(false)
    }


    const modelComponents = () => {

        let components = null

        switch (cycle) {
            case "start":
                components = (
                    <div className="membership-modal">

                        <div className="close" onClick={toggleModal}>close</div>
                        <div><h1>Membership</h1></div>
                        <div>
                            <p>Are you a new member?</p>
                        </div>
                        <div className="radio-options">
                            <span><input type="radio" name="membership" value="yes" onChange={(e) => setMembership(e.target.value)} /> Yes</span>
                            <span><input type="radio" name="membership" value="no" onChange={(e) => setMembership(e.target.value)} /> No</span>
                        </div>
                        <div className="proceed">
                            <Button onclick={() => changeCycle(membership)} label="Proceed"/>
                        </div>
                    </div>
                )
                break;
            case "no":
                components = <h1>Register</h1>
                break;
            case "yes":
                components = (
                    <>
                        <div className="login-modal">
                            <div className="close" onClick={toggleModal}>close</div>
                            <div className="title"><h1>Membership</h1></div>
                            <input type="text" placeholder="ID / Passport Number " />
                            {/* <div onClick={() => changeCycle("otp")}>
                                <p>Proceed</p>
                            </div> */}
                            <div className="proceed">
                                <Button onclick={() => changeCycle('otp')} label="Proceed"/>
                            </div>
                        </div>
                    </>
                )
                break;
            case "otp":
                components = (
                    <div className="otp-modal">
                        <div className="close" onClick={toggleModal}>close</div>
                            <div className="title"><h1>OTP Verification</h1></div>
                            <input type="text" placeholder="OTP Code " />
                            {/* <div onClick={() => changeCycle("otp")}>
                                <p>Proceed</p>
                            </div> */}
                            <div className="proceed">
                                <Button onclick={() => toggleVisibility()} label="Proceed"/>
                            </div>
                    </div>
                );
                break;
            default:
                components = <h1>Error</h1>
                break
        }

        return components
    }


    return (<>
        <header>
            <div className="logo">
                <h3>LOGO</h3>
            </div>
            <div className="contact">
                <p className="title">Call anytime</p>
                <p className="subtitle">+26777777777</p>
            </div>
        </header>
        <main style={{ backgroundColor: 'skyblue' }}>
            <h3>Welcome to Bayport</h3>
            <h1>Apply For A Loan That Is Right For You</h1>
            {isButtonVisible ? <div className="button-calculate" onClick={toggleModal}>
                <p ref={applyButton}>Calculate Loan</p>
            </div> : null}
        </main>
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="modal"
            overlayClassName="myoverlay"
        >


            {modelComponents()}
        </Modal>
    </>
    );
}