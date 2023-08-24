import React, { useState } from 'react'
import image1 from '../images/carton1.png';
import { Card } from './Card';
import axios from 'axios';

 const Main = () => {
    const [search,setSearch] = useState("");
    const [bookData,setData]=useState([]);
    const searchBook =(evt)=>{
        if(evt.key==='Enter')
        {
           axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD6qEXiI9ZhGD3osXVMPOdIapy2Urd70XE'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        
        }
    }
  return (
    <>
    <div className='header'>
        <div className='row1'>
            <h1>A room without books is like<br/> a body without a soul.</h1>
        </div>
        <div className='row2'>

            <h2>Find your Book</h2>
            <div className='search'>
                <input type='text' placeholder='Enter Book Name' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <img src={image1} alt='..'/>

        </div>
    
    </div>
    <div className='container'>
        {
            <Card book={bookData}/>
        }
        
        
        </div>
    </>
  )
}
export default Main;


