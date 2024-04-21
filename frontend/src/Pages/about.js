import {useEffect} from "react"; 

export default function About(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
            <h1 id="abtitle">About Section</h1>

        <section className="aboutsect1">
            <img src="images/aboutimage1.webp" alt="" />
            <div>
                <h1>Leave a Mark</h1>
                <p>
                    We're known more by the impact we create
                    than the titles we hold. Impact that is brought by
                    working together on audacious challenges at scale
                    with an aim to revolutionize for the Indian customer.
                    We believe great ideas can emerge from anywhere
                    and must be backed. Our people - backed by our
                    culture of end-to-end ownership - have revolutionised
                    India's e-commerce sector - several times over!
                </p>
            </div>
        </section>
        <hr />

        <section className="aboutsect1">
    
        <div>
            <h1>Experiment Learn Grow</h1>
            <p>
                Our journey of building India's biggest unicorn
                start-up has been full of successes, but also failures
                and learning from them. That's why there's calculated
                risk-taking, a high willingness to learn and improvise,
                and a growth orientation built into everything we do.
                Whether it be opening a new warehouse, or making
                our mobile app a bit more consumer friendly, we're
                always experimenting, learning and growing!
            </p>
        </div>
        <img src="images/aboutimage2.webp" alt=""/>
        </section>
        <hr/>

        <section className="aboutsect1">
            <img src="images/aboutimage3.webp" alt=""/>
            <div>
                <h1>Work With The Best</h1>
                <p>
                    The best people make the best teams. And we put all
                    our efforts into finding the right people that fit into
                    our high-performing inclusive teams. Everyone has a
                    voice on the table and diversity of thoughts, styles
                    and actions is celebrated. From a category leader to a
                    wishmaster, we are all bound together and guided by
                    our values of audacity, bias for action, customer-first,
                    integrity and inclusion.
                </p>
            </div>
            
        </section>
        <hr/>
        <section className="aboutsect1">
            
            <div>
                <h1>We Care</h1>
                <p>
                    Our culture of care extends to our people,
                    stakeholders, customers and the planet! We do not
                    believe in a one size fits all strategy. Our benefits and
                    care policies are driven by empathy and customised
                    to the unique needs of individual Flipsters. Because
                    when Flipsters and their families are cared for, they
                    can focus on doing their best work. We put your
                    hopes, dreams and endeavours first - always.
                </p>
            </div>
            <img src="images/aboutimage4.webp" alt=""/>
        </section>
        </>
    )
}