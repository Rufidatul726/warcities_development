"use client"

import { Hero, NavBar, Footer } from "@components";

export default async function Home() {

  return (
    <main className='overflow-hidden'>
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
