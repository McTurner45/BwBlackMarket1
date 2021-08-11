import './header.css'
import { useRef, useState } from 'react';
import Modal from "react-modal";
import Button from './button';
import bayportLogo from "./bayportlogo.png";
import background from './image.png';

Modal.setAppElement("#root");

export default function Header({ toggleInvisibleExisting, toggleInvisibleNew }) {

    const [isOpen, setIsOpen] = useState(false);

    const [cycle, setStateCycle] = useState("start")

    const [membership, setMembership] = useState('no');

    const [isButtonVisible, setButtonVisible] = useState(true)

    const applyButton = useRef()

    const changeCycle = (value) => {
        setStateCycle(value);
    }

    const toggleVisibilityExisting = () => {
        toggleInvisibleExisting();
        setIsOpen(false);
    }

    const toggleVisibilityNew = () => {
        toggleInvisibleNew();
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
                        <div><h1>Are you a new customer?</h1></div>
                        {/* <div>
                            <p>Are you a new customer?</p>
                        </div> */}
                        <div className="radio-options">
                            <span><input type="radio" name="membership" value="no" onChange={(e) => setMembership(e.target.value)} /> Yes</span>
                            <span><input type="radio" name="membership" value="yes" onChange={(e) => setMembership(e.target.value)} /> No</span>
                        </div>
                        <div className="proceed">
                            <Button onclick={() => {
                                if (membership == "yes") {
                                    changeCycle(membership)
                                }else{
                                    toggleVisibilityNew()
                                }
                            }} label="Proceed" />
                        </div>
                    </div>
                )
                break;
            case "no":
                components = (
                    <div className="otp-modal">
                        <div className="close" onClick={toggleModal}>close</div>
                        <div className="title"><h1>Proceed</h1></div>
                        <div className="proceed">
                            <Button onclick={() => toggleVisibilityNew()} label="Proceed" />
                        </div>
                    </div>
                );
                break;
            case "yes":
                components = (
                    <>
                        <div className="membership-modal">
                            <div className="close" onClick={toggleModal}>close</div>
                            <div className="title"><h1>Customer</h1></div>
                            <input type="text" placeholder="ID / Passport Number " />
                            {/* <div onClick={() => changeCycle("otp")}>
                                <p>Proceed</p>
                            </div> */}
                            <div className="proceed">
                                <Button onclick={() => changeCycle('otp')} label="Proceed" />
                            </div>
                        </div>
                    </>
                )
                break;
            case "otp":
                components = (
                    <div className="otp-modal">
                        <div className="close" onClick={toggleModal}>close</div>
                        <div className="title"><h1>Please enter verification code sent to you?</h1></div>
                        <input type="text" placeholder="OTP Code " />
                        <div className="proceed">
                            <Button onclick={() => toggleVisibilityExisting()} label="Proceed" />
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
                {/* <h3>LOGO</h3> */}
                <img src={bayportLogo} style={{ marginLeft: '50px' }} height="60px" alt="" />
            </div>
            <div className="contact">
                <div className="c-title">Call anytime</div>
                <div className="c-subtitle">(+267) 393 6456</div>
            </div>
        </header>
        <main style={{
            backgroundImage: `url(${background})`,
            backgroundPositionX: "80%"
        }}>
            <h3>Welcome to Bayport</h3>
            <h1>Apply For A Loan That Is Right For You</h1>
            {isButtonVisible ? <div className="button-calculate" onClick={toggleModal}>
                <p ref={applyButton}>Calculate Loan</p>
            </div> : null}

            <br />
            <br />

            <div className="description">
                <div className="top-border"><p>Quick Payment</p></div>
                <div className="top-border"><p>Competitive Interest</p></div>
            </div>
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