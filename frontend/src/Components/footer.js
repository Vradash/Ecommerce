
function footer(){
    return (
        <>
            <footer className="section1">
            <div className="col">
                <div>
                <img src="images/logo123.png" alt="" />
                </div>
                <div>
                <p><strong>Address:</strong> Block-C, Hostel-K, Nit Jamshedpur</p>
                <p><strong>Phone:</strong> (+91)-9765544129/(+91)-9821374776</p>
                <p><strong>Email:</strong> singhvikramrajan111@gmail.com</p>
                </div>
                <div className="follow">
                    <h3 className="icontag">Follow us:</h3>
                    <div>
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-f icon"></i></a>
                        <a href="https://www.twitter.com"><i className="fab fa-twitter icon"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram icon"></i></a>
                        <a href="https://www.youtube.com"><i className="fab fa-youtube icon"></i></a>       
                </div>
            </div>
            </div>
            
            {/* <div className="col">
                <h3>About</h3>
                <a href="/#">About Us</a>
                <a href="/#">Privacy policy</a>
                <a href="/#">Terms & Conditions</a>
                <a href="/#">Contact Us</a>
            </div> */}

            <div className="install">
                <h3>Install App</h3>
                <h3>From Google Play Store</h3>
                <div className="row"> 
                    <a href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=CjwKCAiAyfybBhBKEiwAgtB7fliTQcl7kqKvCJR8rqiMmhGjm5IObDX71Q3MdpxR1-xfNT5qzOhAsxoCHNYQAvD_BwE&gclsrc=aw.ds"><img src="images/download.png" alt="Unable to load" /></a>
                </div>
                <h3>Secured Payment Gateways:</h3>
                <img src="images/mastercard.png" alt="Unable to load" />
            </div>
            <div className="copyright">
                <h4>Copyright &copy; | Vikram Singh 2021UGEE050 | All Rights Reserved</h4>
            </div>
            </footer>
        </>

    );
}

export default footer;