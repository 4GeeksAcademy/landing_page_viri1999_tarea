import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/jumbotron.css'; 

function JumbotronComponent() {
    return (
        <div className="jumbotron">
            <div className="container">
                A Warm Welcome!
            </div>
            <div className="parrafoA">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam est quae dolore? Cumque recusandae deleniti facilis? Corporis accusamus, commodi eius veritatis dignissimos nihil sed eaque dolores nemo beatae quasi?</p>
                <button type="button" className="btn btn-primary">Call to Action</button>
            </div>
        </div>
    );
}

export default JumbotronComponent;
