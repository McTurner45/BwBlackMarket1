

export default function Footer() {


    return (
        <footer>
            <div className="footerContainerOne">
                <div class="insideFooterContainerOne" style={{ flexGrow: 3 }}>
                    <div style={{ marginBottom: '10px' }}>
                        <i class="fab fa-facebook-square" style={{ color: '#4089BE', fontSize: 'large', marginRight: '10px' }}></i>
                        <i class="fab fa-twitter" style={{ color: '#4089BE', fontSize: 'large', marginRight: '10px' }}></i>
                        <i class="fab fa-linkedin-in" style={{ color: '#4089BE', fontSize: 'large', marginRight: '10px' }}></i>
                        <i class="fab fa-instagram" style={{ color: '#4089BE', fontSize: 'large', marginRight: '10px' }}></i>
                    </div>


                    <div style={{ fontSize: '20px', width: '50%' }}>
                        <p><strong>LOGO</strong> </p>
                    </div>
                </div>

                <div class="insideFooterContainerOne" style={{ flexGrow: 3 }}>
                    <p style={{ margin: '0px 0px 10px 0px' }}><strong>Support</strong></p>

                    <div style={{ lineHeight: 1.6 }}>
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</a> <br />
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>FAQs</a> <br />
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Locate A Branch</a>
                    </div>
                </div>

                <div class="insideFooterContainerOne" style={{ flexGrow: 8 }}>
                    <p style={{ margin: '0px 0px 10px 0px' }}><strong>Bayport</strong></p>

                    <div style={{ lineHeight: 1.6 }}>
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Loans</a> <br />
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>How It Works?</a>
                    </div>
                </div>

                <div class="insideFooterContainerOne" style={{ flexGrow: 1 }}>
                    <i class="fas fa-envelope" style={{
                        color: '#4089BE', fontSize: 'large'
                    }} >
                        <span
                            style={{ color: 'white', fontSize: 'small', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'normal' }}>
                            needhelp@company.com
                                    </span>
                    </i>
                    <p></p>
                    <br />

                    <hr />
                    <button
                        style={{ width: '100%', backgroundColor: '#17B1F0', border: 'none', color: 'white', padding: '10px' }}>Enquire</button>
                    <p>
                        <span style={{ color: '#4089BE' }}>+267 70000000</span> <br />

                                    Mon-Sat 8:00 AM - 6:00 PM

                </p>
                </div>

                <div class="footerContainerTwo">
                    <p>
                        Copyright &copy; Bayport. All rights reserved &emsp;
                <a href="#">Privacy policy</a> &emsp;
                <a href="#">Terms of Use</a>
                    </p>
                </div>


            </div>
        </footer>
    );
}