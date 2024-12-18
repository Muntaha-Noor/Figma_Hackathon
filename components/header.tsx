import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header className='text-black w-full pt-[20px] pb-[20px] bg-[#F0F2F3] flex items-center'>
      <div className="mx-auto flex flex-wrap justify-between items-center w-full max-w-[1200px] px-5">
        
        <a className="flex items-center mb-4">
          <Image alt='logo' height={40} width={40} src={"/logo.png"} />
          <span className="ml-3 text-2xl sm:text-3xl">Comforty</span>
        </a>
        
        <div className="flex items-center gap-3 rounded-sm bg-white p-3 h-14 w-32 sm:w-40">
          <CiShoppingCart className='h-8 w-8 sm:h-10 sm:w-10' />
          <h3 className='text-sm sm:text-xl md:text-2xl'>Cart</h3>
          <div className='bg-primary text-white p-1 rounded-full h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center'>
            2
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
