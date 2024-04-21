
function feature(props){
    return (
        <>
            <div className="box1">
              <img id="nani" src={props.src} alt="" />
              <h3>{props.detail}</h3>
            </div>
        </>
    );
}

export default feature;