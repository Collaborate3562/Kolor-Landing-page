import LogoIcon from "../../assets/logo/logo_icon.png";
import Logo from "../../assets/logo/logo.png";
import Phone from "../../assets/icon/phone.svg";
import Email from "../../assets/icon/email.svg";
import Location from "../../assets/icon/location.svg";
import Discord from "../../assets/icon/discord.svg";
import Link from "../../assets/icon/link.svg";
import Twitter from "../../assets/icon/twitter.svg";
import Instagram from "../../assets/icon/instagram.svg";
import LinkedIn from "../../assets/icon/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col py-48 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 w-full bg-black gap-6">
        <div className="flex gap-4 justify-start">
          <img src={LogoIcon} alt="logo-icon" className="w-20" />
          <img src={Logo} alt="logo" className="h-6 my-auto" />
        </div>
        <div className="flex flex-col xl:flex-row w-full gap-6 xl:gap-28">
          <div className="flex flex-col md:flex-row w-full xl:w-1/2 gap-6">
            <div className="flex flex-col w-full md:w-1/2 md:border-r border-white xl:my-24 gap-8 items-center justify-center">
              <div className="flex text-white w-full">
                <div className="flex w-1/5">
                  <img src={Phone} alt="phone" className="w-5"/>
                </div>
                <div className="font-soralight w-full">+536 5922398</div>
              </div>
              <div className="flex text-white w-full">
                <div className="flex w-1/5">
                  <img src={Email} alt="email" className="w-6 pt-1"/>
                </div>
                <div className="font-soralight w-full">green.data@gmail.com</div>
              </div>
              <div className="flex text-white w-full">
                <div className="flex w-1/5">
                  <img src={Location} alt="location" className="w-6 pt-1"/>
                </div>
                <div className="font-soralight w-full">lorep ipsum lorep</div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 md:border-r border-white xl:my-24 gap-6 text-white md:items-center md:justify-center">
              <div className="font-soraregular text-sm cursor-pointer">Home</div>
              <div className="font-soraregular text-sm cursor-pointer">Landowners</div>
              <div className="font-soraregular text-sm cursor-pointer">Roadmaps</div>
              <div className="font-soraregular text-sm cursor-pointer">Contact</div>
            </div>
          </div>
          <div className="flex flex-col w-full xl:w-1/2 py-16 gap-12 text-white">
            <div className="text-lg-4">Join us</div>
            <div className="flex flex-col sm:flex-row w-full gap-4 lg:gap-12">
              <input type="text" placeholder="Email Address" className="font-soralight w-full" />
              <button className="bg-white text-black px-9 rounded-2xl h-16">Suscribe</button>
            </div>
            <div className="flex gap-2">
              <img src={Discord} alt="discord" className="h-6" />
              <img src={Link} alt="link" className="h-6" />
              <img src={Twitter} alt="twitter" className="h-6" />
              <img src={Instagram} alt="instragram" className="h-6" />
              <img src={LinkedIn} alt="linkedin" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;