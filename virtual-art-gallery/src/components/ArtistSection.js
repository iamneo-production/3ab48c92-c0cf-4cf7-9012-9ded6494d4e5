
import React, { useState, useEffect } from 'react'

const ArtistSection = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://ide-efacaadeebfbfbaefceeafcfafcbdcedcebd.premiumproject.examly.io/proxy/8080/artist')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
     
    return (
            <div className='row d-flex justify-content-center'>
                {data.map(item => (
                    <div className="card mt-2 mb-2" style={{ width: "16rem" }}>
                        <img src={item.artistImage} class="card-img-top" alt={item.artistName} style={{ width: "100%", height: "200px" }}/>
                        <div class="card-body">
                            <h5 class="card-title">{item.artistName}</h5>
                            
                        </div>
                    </div>
                ))}
            </div>
            
    )
}
export default ArtistSection;