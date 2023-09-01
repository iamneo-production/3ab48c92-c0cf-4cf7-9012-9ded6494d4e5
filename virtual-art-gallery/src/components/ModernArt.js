
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import data from "../db.json";


const ModernArt = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://ide-efacaadeebfbfbaefceeafcfafcbdcedcebd.premiumproject.examly.io/proxy/8080/modernart')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e => console.log(e))
  }, []);

  return (

    <div className='row d-flex justify-content-center bg-dark'>
      {data.map(item => (
        <div key={item?.id} className="card mycard mt-10 mb-2" style={{ width: "16rem" }}>
          <img src={item.image} className="zoom card-img-top" alt={item.title} style={{ width: "100%", height: "200px" }} />
          <div className="card-body text-center"> {/* Added "text-center" class */}
            <h5 className="card-title">{item.title}</h5>
            <h5 className="card-title">{item.artist}</h5>
            <Link to={`/read/${item.id}`} className="btn btn-dark">View Details</Link>
          </div>
        </div>
      ))}
    </div>


  )
}
export default ModernArt