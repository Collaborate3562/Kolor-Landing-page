import { useState } from "react";
import MenuItem from "../../components/items/menuitem";
import { menuList } from "./menu";
import LogoIcon from "../../assets/logo/logo_icon.png";
import Logo from "../../assets/logo/logo.png";
import IcoMenu from '../../assets/icon/menu.svg';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="flex absolute justify-between w-full items-center h-40 top-0 z-20 mx-auto px-auto px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
        <div className="flex justify-center items-center gap-4">
          <img src={LogoIcon} alt="logo-icon" className="w-16 md:w-24 xl:w-28" />
          <img src={Logo} alt="logo" className="w-16 md:w-24 xl:w-28" />
        </div>
        <div className="hidden lg:flex justify-center items-center gap-6">
          {menuList.map((menu, idx) => (
            <MenuItem key={idx} title={menu.label} link={menu.link} />
          ))}
        </div>
        <button className="hidden lg:block border border-white h-12 text-white rounded-full px-14 font-bold">Litepaper</button>
        <div className="flex lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
          <img src={IcoMenu} alt="menu" />
        </div>
        <div className={` fixed top-0 right-0 w-screen z-50 min-h-screen bg-black bg-opacity-90 transform shadow-lg shadow-white ${openMenu ? " -trasnlate-x-0" : " translate-x-full"} duration-200`}>
          <div className="h-36 flex bg-black items-center pr-10 justify-end" onClick={() => setOpenMenu(!openMenu)}>
            <p className="text-5xl cursor-pointer text-white">×</p>
          </div>
          <div className="w-full flex justify-center flex-col items-center gap-8 pt-10">
            <div className="flex gap-8 flex-col">
              {menuList.map((menu, idx) => (
                <MenuItem key={idx} title={menu.label} link={menu.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;