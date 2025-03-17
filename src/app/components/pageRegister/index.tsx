'use client';

import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export function PageRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    image: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    username: false,
    image: false,
  });

  const [mounted, setMounted] = useState(false);
  const rounter = useRouter();

  useEffect(() => {
    setMounted(true);
  }),
    [];

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      username: formData.username.trim() === '',
      image: !image,
    };

    setErrors(newErrors);
    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.username &&
      !newErrors.image
    ) {
      if (mounted) {
        rounter.push({
          pathname: '/ageConfirmation',
          query: {
            name: formData.name,
            email: formData.email,
            username: formData.username,
            image: formData.image,
          },
        });
      }
    }
  };

  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleClickRef = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file && (file.type === 'image/jpg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setImage(result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Apenas arquivos JPG e PNG!!');
      setImage(null);
    }
    event.target.value = '';
  };
  return (
    <div>
      <header className="p-[40px] flex justify-center items-center">
        <img src="/logo-full.svg" alt="Logo" className="" />
      </header>
      <div>
        <h1 className="pt-[20px] pl-[50px] pr-[50px] text-[60px] w-[946px] text-center font-inconsolata font-bold text-[#d2d0d6]">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="pt-[50px] w-[100%] m-auto text-[22px] text-center text-[#d2d0d6]">
          Secure your spot at next year's biggest coding conference.
        </p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col w-[60%] mt-[40px] mr-auto ml-auto mb-0"
        >
          <label htmlFor="" className="w-[100%] m-auto">
            Upload Avatar
          </label>
          <div
            onClick={handleClickRef}
            className="flex flex-col justify-center items-center mb-[15px] mt-[10px] mr-0 ml-0 p-[20px] h-[140px] border-2 border-dashed border-[#4b486a] rounded-[6px] relative bg-[#4b486a4d] cursor-pointer"
          >
            <input
              accept="image/jpg, image/png"
              ref={fileInputRef}
              onChange={handleFileInput}
              type="file"
              className="hidden"
            />
            {image ? (
              <img
                src={image}
                alt="Preview"
                className="w-[50px] h-[50px] border-1 border-solid border-[#8784a4] rounded-[10px] absolute top-[15%]"
              />
            ) : (
              <img
                src="/icon-upload.svg"
                alt=""
                className="w-[50px] h-[50px] border-1 border-solid border-[#8784a4] rounded-[10px] absolute top-[15%] bg-[#4b486a]"
              />
            )}
            <p className="mt-[60px] text-white font-light">
              Drag and drop or click to upload
            </p>
          </div>
          {errors.image && (
            <span className="flex text-[12px] items-center gap-2 text-[#f57261]">
              <img src="/icon-info.svg" alt="" className="" />
              Upload your photo (JPG or PNG, max size: 500KB).
            </span>
          )}
          <div className="flex flex-col justify-center mt-5">
            <label htmlFor="full-name" className="text-[20px] text-white">
              Full Name
            </label>
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              name="name"
              className="outline-none mt-[10px] ml-0 mb-[10px] mr-0 pt-[15px] pr-0 pb-[15px] pl-[10px] border border-solid border-[#8784a4] rounded-md text-[#d2d1d6] text-[15px] bg-[#4b486a4c] focus:border-[#ffffff] focus:ring-2 focus:ring-[#8784a4]"
            />
            {errors.name && (
              <span className="flex gap-1 text-[#f57261] text-[12px]">
                <img src="/icon-info.svg" alt="" className="" />
                Shouldn't be empty.
              </span>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="email" className="text-[20px] text-white">
              Email Address
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="text"
              name="email"
              className="block outline-none mt-[10px] ml-0 mb-[10px] mr-0 pt-[15px] pr-0 pb-[15px] pl-[10px] border border-solid border-[#8784a4] rounded-md text-[#d2d1d6] text-[15px] bg-[#4b486a4c] focus:border-[#ffffff] focus:ring-2 focus:ring-[#8784a4]"
            />
            {errors.email && (
              <span className="flex gap-1 text-[#f57261] text-[12px]">
                <img src="/icon-info.svg" alt="" className="" />
                please enter a valid email address.
              </span>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="user-name" className="text-[20px] text-white">
              Github Username
            </label>
            <input
              value={formData.username}
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="@yourusername"
              className="outline-none mt-[10px] ml-0 mb-[10px] mr-0 pt-[15px] pr-0 pb-[15px] pl-[10px] border border-solid border-[#8784a4] rounded-md text-[#d2d1d6] text-[15px] bg-[#4b486a4c] focus:border-[#ffffff] focus:ring-2 focus:ring-[#8784a4]"
            />
            {errors.username && (
              <span className="flex gap-1 text-[#f57261] text-[12px]">
                <img src="/icon-info.svg" alt="" className="" />
                Shouldn't be empty.
              </span>
            )}
          </div>
          <div className="mt-5 mb-10 flex justify-center bg-[#f57261] p-3 rounded-md">
            <button className="cursor-pointer text-[#0c082b] font-extrabold text-[20px]">
              Generete my ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
