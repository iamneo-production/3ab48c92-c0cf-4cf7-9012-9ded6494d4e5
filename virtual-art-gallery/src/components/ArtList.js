import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

const ArtList = () => {
    return (
        <>
            <Banner />

            {/* testimonials */}

            <div className='container-fluid p-5' style={{ backgroundColor: "" }}>

                <p className='text-secondary fw-bold text-center m-3'>WHAT CLIENT SAYS</p>

                <h2 className='text-center fw-bold'>Happy Customers</h2>

                <hr className='text-dark' />





                <div className='row'>




                    <div className='col-md-4'>




                        <div className="card shadow" style={{ width: "18rem" }}>

                            <div className="card-body">

                                <h5 className="card-title">Mr. </h5>

                                <p className="card-text">Nice recommendations</p>

                            </div>

                        </div>




                    </div>




                    <div className='col-md-4'>




                        <div className="card shadow" style={{ width: "18rem" }}>

                            <div className="card-body">

                                <h5 className="card-title">Ms. </h5>

                                <p className="card-text">Nice recommendations</p>

                            </div>

                        </div>




                    </div>




                    <div className='col-md-4'>




                        <div className="card shadow" style={{ width: "18rem" }}>

                            <div className="card-body">

                                <h5 className="card-title">Mrs.</h5>

                                <p className="card-text">Nice recommendations</p>




                            </div>

                        </div>




                    </div>




                </div>

            </div>

            <Footer />
        </>
    );
};

export default ArtList;
