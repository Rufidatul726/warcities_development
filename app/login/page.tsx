"use client";

import React, {useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {CustomForm, CustomInput, CustomButton} from '@components';

const page = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })

  const router = useRouter();
  const [error, setError] = useState(null);

  const onSignin = async () => {
    try {
      console.log(user);
      const res = await axios.post('/api/users/signin', user);
      console.log(res);
      if (res.data.error) {
        setError(res.data.error);
      } else {
        console.log(res.data);
        router.push('/');
      }
    } catch (err:any) {
      console.log(err);
      setError(err.message);
    }
    
  }

  return (   
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow-lg">
      <h2 className="text-xl mb-4">Sign In here</h2>
      <CustomForm handleSubmit={onSignin}>
        <CustomInput
          label="Email"
          type="email"
          value={user.email}
          handleChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <CustomInput
          label="Password"
          type="password"
          value={user.password}
          handleChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <CustomButton
          title="Sign In"
          // isDisabled={buttonDisabled}
          containerStyles="mt-4"
          handleClick={onSignin}
        />
      </CustomForm>
      <div className="text-center mt-4">
        <p>Don't have an account?</p>
        <Link href="/signup" className="text-primary-blue">Sign Up</Link>
      </div>
    </div>
  )
}

export default page
