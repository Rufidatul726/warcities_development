"use client";

import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {CustomForm, CustomInput, CustomButton} from '@components';

const page = () => {
  const [user, setUser] = React.useState({
    name: '',
    password: '',
    email: '',
    phone: '',
  })

  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/users/signup', user);
      if (res.data.error) {
        setError(res.data.error);
      } else {
        router.push('/login');
      }
    } catch (err:any) {
      console.log(err);
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user.name && user.email && user.password && user.phone) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow-lg">
      <h2 className="text-xl mb-4">Sign Up</h2>
      <CustomForm handleSubmit={onSignup}>
        <CustomInput
          label="Name"
          type="text"
          value={user.name}
          handleChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
        <CustomInput
          label="Phone"
          type="text"
          value={user.phone}
          handleChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <CustomButton
          title="Sign Up"
          isDisabled={buttonDisabled}
          containerStyles="mt-4"
          handleClick={onSignup}
        />
      </CustomForm>
      <div className="text-center mt-4">
        <p>Already have an account? </p>
        <Link href="/login">Login here!</Link>
      </div>
    </div>
  );
};


export default page
