import {useEffect} from "react"; 


export default function Contact(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return (
        <>
            <form  id="blogpost" action="/blog" method="post">
            <div className="form-group">
            <input type="text" name="title" id="postitle" placeholder="Enter title"/>
            </div>
            <div className="form-group">
            <textarea id="postBody" rows="8" cols="80"></textarea>
            </div>
            <button id="submitbutt" type="submit">Submit</button>
            </form>
            <div className="contactsect">
                <div>
                    <img className="contactimage" src="images/contactimage1.png" alt="Unable to load"/>
                </div>
                
                <div className="contcol">
                    <h1>Home Customers</h1>
                    <p>
                        Individuals purchasing products or services for personal use.
                    </p>
                    <p>
                        1800 108 4747
                    </p> 
                    <p>
                        1833 750 0500 (WhatsApp)
                    </p> 
                        
                    {/* </p> */}
                </div>
                <hr/>
                <div>
                    <img className="contactimage" src="images/contactimage2.png" alt="Unable to load"/>
                </div>
                
                <div className="contcol">
                    <h1>Business Customers</h1>
                    <p>
                        Individuals or companies purchasing products or services for professional use.
                    </p>
                    <p>
                        1800 108 4746
                    </p>   
                    <p>
                        1833 750 0500 (WhatsApp)
                    </p>    
                
                    {/* </p> */}
                </div>
                <hr/>
                <div>
                    <img className="contactimage" src="images/contactimage3.png" alt="Unable to load"/>
                </div>

                <div className="contcol">
                    <h1>Education Store</h1>
                    <p>
                        For students, teachers, schools looking for savings and value.
                    </p>
                    <p>
                        1800 108 4747
                    </p>  
                    <p>
                        VISIT STORE
                    </p>   
                    {/* </p> */}
                </div>

                <div>
                    <img className="contactimage" src="images/contactimage4.webp" alt="Unable to load"/>
                </div>
                
                <div className="contcol">
                    <h1>Home Customers</h1>
                    <p>
                        Individuals purchasing products or services for personal use.
                    </p>
                    <p>
                        1800 108 4747
                    </p> 
                    <p>
                        1833 750 0500 (WhatsApp)
                    </p> 
                        
                    {/* </p> */}
                </div>
                <hr/>
                <div>
                    <img className="contactimage" src="images/contactimage1.png" alt="Unable to load"/>
                </div>
                
                <div className="contcol">
                    <h1>Home Customers</h1>
                    <p>
                        Individuals purchasing products or services for personal use.
                    </p>
                    <p>
                        1800 108 4747
                    </p> 
                    <p>
                        1833 750 0500 (WhatsApp)
                    </p> 
                        
                    {/* </p> */}
                </div>
                <hr/>
                <div>
                    <img className="contactimage" src="images/contactimage6.webp" alt="Unable to load"/>
                </div>
                
                <div className="contcol">
                    <h1>Home Customers</h1>
                    <p>
                        Individuals purchasing products or services for personal use.
                    </p>
                    <p>
                        1800 108 4747
                    </p> 
                    <p>
                        1833 750 0500 (WhatsApp)
                    </p> 
                        
                    {/* </p> */}
                </div>
            </div>
        </>
    )
}