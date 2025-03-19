'use client';

import { useSearchParams } from 'next/navigation';
import Layout from '../components/layout-page';

export default function () {
  const searchParaments = useSearchParams();

  const name = searchParaments.get('name');
  const email = searchParaments.get('email');
  const username = searchParaments.get('username');
  const image = searchParaments.get('image');

  return (
    <Layout>
      <div className="m-auto w-[65%]">
        <header className="p-[40px] flex justify-center items-center">
          <img src="/logo-full.svg" alt="Logo" className="" />
        </header>
        <section className="pt-[20px] pr-[50px] pl-[50px] pb-0">
          <h1 className="text-[60px] font-bold text-center text-[#ffffff]">
            Congrats,{' '}
            <span className="bg-gradient-to-r from-[#f37362] via-[#f37362] to-[#ffffff] text-transparent bg-clip-text">
              {name}!{' '}
            </span>
            Your ticket is ready.
          </h1>
          <p className="text-center w-[100%] m-auto pt-[50px] text-[20px] font-bold text-[#d2d1d6]">
            We've emailed your ticket to{' '}
            <span className="text-[#f37362]">{email}</span> and will send
            updates in the run up to the event.
          </p>
        </section>
        <article className="bg-[url('/background-desktop.png')] bg-no-repeat bg-center bg-cover w-full h-[500px]"></article>
      </div>
    </Layout>
  );
}
