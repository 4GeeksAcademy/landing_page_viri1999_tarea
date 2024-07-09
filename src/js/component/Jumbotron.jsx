import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Jumbotron() {
    return (
        <div className="container bg-light py-3">
            <div className="row">
                <div className="col-12">
                    <div className="container-welcome display-3">
                        A Warm Welcome!
                    </div>
                    <div className="parrafoA">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam est quae dolore? Cumque recusandae deleniti facilis? Corporis accusamus, commodi eius veritatis dignissimos nihil sed eaque dolores nemo beatae quasi?</p>
                        <button type="button" className="btn btn-primary">Call to Action</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Jumbotron;
