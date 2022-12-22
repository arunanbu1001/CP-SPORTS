import React from 'react'
import { useState } from 'react';
import axios from 'axios';
// import './Style.css';

const Form = () => {
    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const [email,setEmail] = useState('');
  
    const handleSubmit = () => {
      if(name.length === 0){
        alert("Name has left Blank!");
      }
      else if(mobile.length === 0){
        alert("Mobile has left Blank!");
      }
      else if(email.length === 0){
        alert("Email has left Blank!");
      }
      else{
        const url = 'http://localhost/php/sam.php';
        let fData = new FormData();
        fData.append('name', name);
        fData.append('mobile', mobile);
        fData.append('email', email);
        console.log(fData);
        axios.post(url, fData)
        // console.log(url)
        .then(response=> alert(response.data ))
        .catch(error=> alert(error));
       
      }
      
      
    }
  
    return (
      <>
        <div className='container'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="mobile">Mobile</label>
          <input type="text" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="button" name="submit" id="submit" value="SEND" onClick={handleSubmit} />
        </div>
      </>
    );
}

export default Form