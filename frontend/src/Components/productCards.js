import { Link } from 'react-router-dom';

function ProductCard(props){

    return (
        <>  
            <div className="pro" >
            {/* <h6>{props.id}</h6> */}
                <Link to="/product" state={props.id}>
                <img src={props.cardImg} alt="Unable to load " />
                <div className="describe">
                    <span>{props.cardComp}</span>
                    <h4>{props.cardName}</h4>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h5 className="price">&#x20B9;{props.cardPrice}</h5>
                </div>
                </Link>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
        </>
    );
}

export default ProductCard;