'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserStore } from '@/store/useStore';

const schema = z.object({
  name: z.string().min(1, "Shouldn't be empty."),
  email: z.string().email('Please enter a valid email address.'),
  username: z.string().min(1, "Shouldn't be empty."),
  image: z.string().min(1, 'Upload your photo (JPG or PNG, max size: 500KB).'),
});

type FormData = z.infer<typeof schema>;

export function PageRegister() {
  const { push } = useRouter();
  const { setUser } = useUserStore();
  const [image, setImage] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleClickRef = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      if (file.size > 500 * 1024) {
        alert('Max size: 500KB');
        setImage('');
        setValue('image', '');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setImage(result);
          setValue('image', result);
          localStorage.setItem('userImage', result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Only JPG and PNG files allowed!');
      setImage('');
      setValue('image', '');
    }
    event.target.value = '';
  };

  const onSubmit = (data: FormData) => {
    if (!image) {
      alert('Please upload an image (JPG or PNG)');
      return;
    }

    setUser({
      ...data,
      image,
    });

    push('/pageconfirmation');
  };

  return (
    <div>
      <header className="p-[40px] flex justify-center items-center">
        <img src="/logo-full.svg" alt="Logo" />
      </header>

      <div>
        <h1 className="pt-[20px] pl-[50px] pr-[50px] text-[60px] w-[946px] text-center font-inconsolata font-bold text-[#d2d0d6]">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>

        <p className="pt-[50px] w-[100%] m-auto text-[22px] text-center text-[#d2d0d6]">
          Secure your spot at next year's biggest coding conference.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[60%] mt-[40px] mx-auto"
        >
          <label>Upload Avatar</label>

          <div
            onClick={handleClickRef}
            className="flex flex-col justify-center items-center mb-[15px] mt-[10px] p-[20px] h-[140px] border-2 border-dashed border-[#4b486a] rounded-[6px] relative bg-[#4b486a4d] cursor-pointer"
          >
            <input
              accept="image/jpg, image/png"
              ref={fileInputRef}
              type="file"
              onChange={handleFileInput}
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
              <img src="/icon-info.svg" alt="" />
              {errors.image.message}
            </span>
          )}

          <div className="flex flex-col justify-center mt-5">
            <label className="text-[20px] text-white">Full Name</label>
            <input
              {...register('name')}
              type="text"
              className="outline-none mt-[10px] p-[15px] border border-solid border-[#8784a4] rounded-md text-[#d2d1d6] text-[15px] bg-[#4b486a4c] focus:border-[#ffffff] focus:ring-2 focus:ring-[#8784a4]"
            />
            {errors.name && (
              <span className="flex gap-1 text-[#f57261] text-[12px]">
                <img src="/icon-info.svg" alt="" />
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label className="text-[20px] text-white">Email Address</label>
            <input
              {...register('email')}
              type="text"
              className="outline-none mt-[10px] p-[15px] border border-solid border-[#8784a4] rounded-md text-[#d2d1d6] text-[15px] bg-[#4b486a4c] focus:border-[#ffffff] focus:ring-2 focus:ring-[#8784a4]"
            />
            {errors.email && (
              <span className="flex gap-1 text-[#f57261] text-[12px]">
                <img src="/icon-info.svg" alt="" />
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label className="text-[20px] text-white">Github Username</label>
            <input
              {...register('username')}
              type="text"
              placeholder="@yourusername"
              className="outline-none mt-[10px] p-[15px] border border-solid border-[#8784a4] rounded-md text-[#d2d1d6] text-[15px] bg-[#4b486a4c] focus:border-[#ffffff] focus:ring-2 focus:ring-[#8784a4]"
            />
            {errors.username && (
              <span className="flex gap-1 text-[#f57261] text-[12px]">
                <img src="/icon-info.svg" alt="" />
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="mt-5 mb-10 flex justify-center bg-[#f57261] p-3 rounded-md">
            <button
              type="submit"
              className="cursor-pointer text-[#0c082b] font-extrabold text-[20px]"
            >
              Generate my ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
