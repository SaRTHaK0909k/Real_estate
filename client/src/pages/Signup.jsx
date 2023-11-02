import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json(); // Parse response as JSON
    console.log(data);
  }

  return (
    <>
      <Header/>
      <div className='p-5 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
          <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
          <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Sign up</button>
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Have an account</p>
          <Link to={"/signin"}>
            <span className='text-blue-700'>Sign in</span>
          </Link> 
        </div>
      </div>
    </>
  )
}

export default Signup;
