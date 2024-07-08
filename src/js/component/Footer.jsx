import React from "react";


const footerComponent = () => {
    const cardStyle = {
        width: '18rem'
    };
    return (
        <div className="col-12 col-md">
            <div className="card" style={cardStyle}>
                    <h5 className="card-title">Copyright @your Website 2019 </h5>
            </div>
        </div>
    )
}

export default footerComponent