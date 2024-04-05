import React, { useState } from 'react'


function Products() {
  const TOKEN = '7091557275:AAHb2c1GATD4_tS-Wc7nJbrGFQ9Z18w0Pco';
  const CHAT_ID = '-4167156592';
  const URL_API =`https://api.telegram.org/bot${TOKEN}/sendMessage`;
  

  const [value, setValue]= useState({
    name: '',
    number: ''
  });


  const btn=()=>{
    fetch(URL_API,{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({chat_id:CHAT_ID, text:{
        Имя: value.name,
        Номер: value.number
      }})})
    .then((res)=>{
      console.log('URAAAA'+res);
  })
  .catch((err)=>{
    console.warn('NOOOO'+ err);
  })
  }

  const sendMess =(event)=>{
    setValue(event.target)
    console.log(value);
  }
  return (
    <div>
      <h3></h3>
      <input type="text" name='name' placeholder='name' value={value.name} onChange={sendMess}/>
      <input type="number" name='numb' placeholder='number' value={value.number} onChange={sendMess}/>
      <button onClick={btn}>
        send mess
      </button>
    </div>
  )
}

export default Products