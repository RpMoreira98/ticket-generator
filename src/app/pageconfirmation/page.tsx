'use client';

import { useSearchParams } from 'next/navigation';
import Layout from '../components/layout-page';

export default function () {
  const searchParaments = useSearchParams();

  const name = searchParaments.get('name');
  const email = searchParaments.get('email');
  const username = searchParaments.get('username');
  const image = searchParaments.get('image') || undefined;

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
        <div className="flex justify-center mt-[60px] ml-auto mr-auto mb-[100px]">
          <article className="bg-[url('/pattern-ticket.svg')] bg-no-repeat bg-center bg-cover w-[600px] h-[280px] p-[20px]">
            <div className="flex flex-col content-between">
              <img src="logo-full.svg" alt="" className="w-[260px]" />
              <p className="pl-[60px]">
                {' '}
                <span>19 de março</span> / Juazeiro do Norte
              </p>
            </div>
            <div className="flex items-center mt-[120px] ml-0 mr-20 mb-20px">
              <img
                src={image}
                alt=""
                className="w-[70px] rounded-[10px] mr-[12px]"
              />
              <div>
                <h2>{name}</h2>
                <h3 className="flex items-center">
                  <img src="icon-github.svg" alt="" />
                  {username}
                </h3>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
