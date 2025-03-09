"use client"


export function PageRegister () {
    return (
       <div>
        <header className="p-[40px] flex justify-center items-center">
            <img src="/logo-full.svg" alt="Logo" className=""/>
        </header>
        <div>
            <h1 className="pt-[20px] pl-[50px] pr-[50px] text-[60px] w-[946px] text-center font-inconsolata font-bold" >Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="pt-[50px] w-[100%] m-auto text-[22px] text-center text-[#d2d0d6]">Secure your spot at next year's biggest coding conference.</p>
            <form action="" className="flex flex-col w-[60%] mt-[40px] mr-auto ml-auto mb-0">
                <label htmlFor="" className="w-[100%] m-auto">Upload Avatar</label>
                <div className="flex flex-col justify-center items-center mb-[15px] mt-[10px] mr-0 ml-0 p-[20px] h-[140px] border-2 border-dashed border-[#4b486a] rounded-[6px] relative bg-[#4b486a4d] cursor-pointer">
                    <input type="text" className="absolute w-[100%] h-[100%] opacity-0 cursor-pointer"/>
                    <img src="/icon-upload.svg" alt="" className="w-[50px] h-[50px] border-1 border-solid border-[#8784a4] rounded-[10px] absolute top-[15%] transform-(-50%) bg-[#4b486a]"/>
                    <p className="mt-[60px] text-white font-light">Drag and drop or click to upload</p>
                </div>
            </form>
        </div>
       </div>
    )
}