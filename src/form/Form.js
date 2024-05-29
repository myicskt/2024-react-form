import React, { useState } from 'react'

const initialList = [
    { id: 0, to: 'ram', text:'hello'},
    { id: 0, to: 'hari', text:'hello'},
    
  ];



export default function Form() {
    const [to, setTo] = useState('');
    const [text, setText] = useState('')
    const [msg, setMsg]=useState(['']);
    const [inputValue, setInputValue] = useState('');
    

    let nextId =0;
    
    function handleSubmit(e) {

        // alert(`you texed ${text} to ${to}`)
        setMsg([
            ...msg,
            { id: nextId++, to: to, text: text }
        ]);
    }

    return (
        <div className='myForm'>
            <form onSubmit={handleSubmit}>
                <label for='to'> To</label>
                <br />
                <br />
                <select value={to} onChange={e => setTo(e.target.value)}>
                    <option> Niemier</option>
                    <option> Nadal</option>
                    <option> Alice</option>
                </select>
                <br />
                <br />
                <textarea onChange={e => setText(e.target.value)} placeholder='Enter your message here ' value={text}>
                </textarea>

                <br />
                <button type='submit' value='submit'>send</button>
            </form>
            <hr/>
            <div>
            <ul className='msgdisplsy'>
                        {
                        msg.map(m => (
                            <li key={m.id}>To : {m.to} <br /> Message: {m.text}</li>
                        ))
                        
                        }
                    </ul>

            </div>
        </div>
    )
}
