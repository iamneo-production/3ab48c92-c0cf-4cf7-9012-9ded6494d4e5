
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const ArtWork = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://ide-efacaadeebfbfbaefceeafcfafcbdcedcebd.premiumproject.examly.io/proxy/8080/artworks')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
     
    return (
            <div className='row d-flex justify-content-center'>
                {data.map(item => (
                    <div className="card mt-10 mb-2" style={{ width: "16rem" }}>
                        <img src={item.image} class="card-img-top" alt={item.title} style={{ width: "100%", height: "200px" }}/>
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <h5 class="card-title">{item.artist}</h5>
                            <Link to={`/read/${item.id}`} class="btn btn-sm btn-info ml-2">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
            
    )
}
export default ArtWork