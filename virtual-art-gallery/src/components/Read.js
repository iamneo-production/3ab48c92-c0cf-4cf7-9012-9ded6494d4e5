import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const [data,setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://ide-efacaadeebfbfbaefceeafcfafcbdcedcebd.premiumproject.examly.io/proxy/8080/artworks/'+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))    
    }, [])
    return (
        <div className='d-flex w-60 vh-80 justify-content-center align item-center bg-light'>
            <div className='w-30 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>Details About Art</h3>
                <div className='mb-2'>
                    <strong>Artist Name: {data.artist}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Decsription : {data.description}</strong>
                </div>
                <Link to="/artwork" className='btn btn-primary ml-2'>Back</Link>
            </div>     
        </div>
    )
}

export default Read