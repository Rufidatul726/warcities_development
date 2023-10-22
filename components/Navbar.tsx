"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import AnnouncementBar from "./AnnouncementBar";
import axios from "axios";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const checkAuth = async () => {
    try {
      const response = await axios.get("/api/users/check-auth");
      console.log(response.data.message);
      if (response.data.message === "User is authenticated") {
        setIsSignedIn(true);
        // console.log("Signed in" + isSignedIn);
      }
      else{
        setIsSignedIn(false);
        // console.log("Signed in" + isSignedIn);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSignOut = async() => {
    try {
      const response = await axios.get("/api/users/signout");
      console.log(response);
      if (response.status === 200) {
        // console.log("Signed out");
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    checkAuth();
  }, []);  

  return (
   <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center w-auto'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={160}
          height={32}
          className='object-contain'
        />
      </Link>

      <div className='flex items-center space-x-2'>
        <CustomButton
          title='Toss a Coin'
          btnType='button'
          containerStyles='bg-primary-blue text-white rounded-full min-w-[30px] hover:bg-white hover:text-primary-blue'
        />
        <CustomButton
          title='Tournaments'
          btnType='button'
          containerStyles='bg-primary-blue text-white rounded-full min-w-[30px] hover:bg-white hover:text-primary-blue'
        />
        <CustomButton
          title='Leaderboard'
          btnType='button'
          containerStyles='bg-primary-blue text-white rounded-full min-w-[30px] hover:bg-white hover:text-primary-blue'
        />
        <CustomButton
          title='About Us'
          btnType='button'
          containerStyles='bg-primary-blue text-white rounded-full min-w-[30px] hover:bg-white hover:text-primary-blue'
        />
      </div>

      <div className='flex items-center space-x-3'>
        {!isSignedIn ? (
          <>
            <Link href='/signup'>
              <CustomButton
                title='Sign up'
                btnType='button'
                containerStyles='bg-primary-blue text-white rounded-full min-w-[30px] hover:bg-white hover:text-primary-blue'
              />
            </Link>
            <Link href='/login'>
              <CustomButton
                title='Sign in'
                btnType='button'
                containerStyles='bg-primary-blue text-white rounded-full min-w-[30px] hover:bg-white hover:text-primary-blue'
              />
            </Link>
          </>
        ) : (
          <Link href='/'>
          <CustomButton
            title='Sign out'
            btnType='button'
            containerStyles='bg-primary-blue text-white rounded-full min-w-[30px] hover:bg-white hover:text-primary-blue'
            handleClick={onSignOut}
          />  
        </Link>
        )}
      </div>
    </nav>
    <AnnouncementBar />
  </header>
);
  };

export default NavBar;
