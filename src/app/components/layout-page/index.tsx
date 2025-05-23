export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="items-center justify-items-center bg-[url('/background-desktop.png')] min-h-screen bg-cover bg-center text-[#d2d0d6]">
      <img
        src="pattern-squiggly-line-top.svg"
        alt="top"
        className="top-[30px] w-[300px] right-0 absolute"
      />
      <img
        src="pattern-circle.svg"
        alt="circle"
        className="absolute -top-[90px] left-[40px]"
      />
      <img
        src="pattern-circle.svg"
        alt="circle"
        className="absolute top-[50%] right-[20%]"
      />
      <main>{children}</main>
    </div>
  );
}
