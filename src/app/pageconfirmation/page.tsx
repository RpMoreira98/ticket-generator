'use client';

import { useSearchParams } from 'next/navigation';
import Layout from '../components/layout-page';
import { useEffect, useState } from 'react';

export default function PageConfirmation() {
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [formatDate, setFormatDate] = useState('');
  const [image, setImage] = useState<string | undefined>(undefined); // Explicitamente definido como string | undefined

  useEffect(() => {
    setName(searchParams.get('name') || '');
    setEmail(searchParams.get('email') || '');
    setUsername(searchParams.get('username') || '');

    // Verifique se o localStorage retorna um valor ou null
    const storedImage = localStorage.getItem('userImage');
    setImage(storedImage || undefined); // Garante que a imagem seja do tipo string ou undefined

    const today = new Date();
    const day = today.getDate();
    let month = today.toLocaleString('pt-BR', { month: 'short' });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    const year = today.getFullYear();

    setFormatDate(`${month} ${day}, ${year}`);
  }, [searchParams]);

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
        <div className="flex justify-center mt-[60px] ml-auto mr-auto">
          <article className="bg-[url('/pattern-ticket.svg')] mb-[50px] bg-no-repeat bg-center bg-cover w-[600px] h-[280px] p-[20px]">
            <div className="flex flex-col content-between">
              <img src="logo-full.svg" alt="" className="w-[260px]" />
              <p className="pl-[60px]">
                {' '}
                <span>{formatDate}</span> / Juazeiro do Norte
              </p>
            </div>
            <div className="flex items-center mt-[100px] ml-0 mr-[20px] pb-[20px]">
              <img
                src={image}
                alt=""
                className="w-[70px] h-[70px] object-cover rounded-[10px] mr-[12px]"
              />
              <div>
                <h2 className="text-[30px] text-[#ffffff]">{name}</h2>
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
