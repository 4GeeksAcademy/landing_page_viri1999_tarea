import React from "react";


const Card = () => {
    const cardStyle = {
        width: '18rem'
    };
    return (
        
        <div className="col-12 col-md">
            <div className="card" style={cardStyle}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis autem voluptates, sint harum magnam est aliquam eligendi accusantium nesciunt, ab enim dicta ducimus illum reprehenderit nobis! Repellendus, explicabo ad!</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

export default Card