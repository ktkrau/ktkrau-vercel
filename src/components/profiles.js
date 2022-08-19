import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'


const Profiles = ({users = []}) => {
    const [searchTerm, setsearchTerm] = useState("")
    
    return(
        <>
        <div className="head">
        <div className="search-box">
            <input type="text" placeholder="Search by name or location..." id="input_search" onChange={(e) =>{
                setsearchTerm(e.target.value)
            }}></input>
            <label for="input_search" className="icon"><FaSearch/></label>
        </div></div>
        <div className="wrapper-grid">
            {users.filter(val=>{
                if(searchTerm === " "){
                    return val;
                } else if(
                    val.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.location.country.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                    return val
                }
            }).map((item,index) =>(
            <div key={index} className="container">
                <div className='banner-img'></div>
                <img alt="profile"className="profile-img" src={item.picture.large}></img>
                <div className="data">
                <h1 className="name">{item.name.first} {item.name.last}</h1>
                <p className="description">{item.email}</p>
                <p className="description">{item.phone}</p>
                <p>{item.location.country}</p>
                </div>
            </div>))}
        </div>
        
        
        </> ) 
};
export default Profiles
