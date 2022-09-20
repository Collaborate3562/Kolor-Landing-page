import Layout from "../../layout";
import NewsItem from "../../components/items/newsitem";
import { newsList } from "./news";
import ArrowRight from "../../assets/icon/right_arrow.png";
import BannerCertificate from "../../assets/images/banner-certificate.png";
import CO2Risk from "../../assets/images/CO2-risk.png";
import KeepLandowners from "../../assets/images/keep-landowners.png";
import KolorVsCarbon from "../../assets/images/kolor-vs-carbon.png";
import CeloLogo from "../../assets/logo/celo-logo.png";
import CookingLogo from "../../assets/logo/cooking-logo.png";
import FloriLogo from "../../assets/logo/flori-logo.png";
import ForpayLogo from "../../assets/logo/forpay-logo.png";
import ParqueLogo from "../../assets/logo/parque-logo.png";
import Complexity from "../../assets/images/complexity.png";

const LandingPage = () => {
  return (
    <>
      <Layout title="Landing Page">
        <div className="flex flex-col bg-banner min-h-screen gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24">
          <div className="flex flex-col-reverse lg:flex-row w-full px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 pt-48">
            <div className="flex flex-col w-full lg:w-1/2 gap-4">
              <div className="font-soralight text-md text-white">
                A NEW ASSETS CLASS
              </div>
              <div className="font-sorabold text-xl text-gradient">
                Valuable land
              </div>
              <div className="font-sorabold text-xl text-white">
                into digital
              </div>
              <div className="font-sorabold text-xl text-white">
                assets
              </div>
              <div className="font-sorathin text-sm text-white">
                Kolor connects Patagonian landowners to individuals who want to conserve and corporations that need to conserve. We enable net zero enthusiasts to protect land and mitigate their carbon emissions by paying landowners to keep the land as it is.
              </div>
              <div className="flex flex-col md:flex-row gap-6 py-12">
                <button className="button-gradient text-sm text-white h-16 px-12 rounded-full">
                  <div className="flex gap-4 items-center justify-center">
                    Landowners
                    <img src={ArrowRight} alt="arrow-right" className="py-3" />
                  </div>
                </button>
                <button className="text-sm text-white h-16 px-12 rounded-full border border-main">
                  Join Discord
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <img src={BannerCertificate} alt="banner-certificate" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center justify-center">
                <div className="font-soralight text-sm text-white">
                  A CO2 SINK AT RISK
                </div>
              </div>
              <img src={CO2Risk} alt="co2-risk" />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <div className="font-sorabold text-lg-4 text-white">
                Half Patagonia
              </div>
              <div className="font-sorabold text-lg-4 text-white">
                is on sale
              </div>
              <div className="font-sorathin text-sm text-white">
                Kolor connects Patagonian landowners to individuals who want to conserve and corporations that need to conserve. Through blockchain technology, we enable net zero enthusiasts to protect land and mitigate their carbon emissions by paying landowners to keep the land as it is.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full text-white text-lg-4 justify-center items-center gap-12">
          <div className="flex font-sorabold px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 pt-48">Let's conserve it. Forever.</div>
          <div className="flex bg-middle w-full"></div>
        </div>
        <div className="flex flex-col w-full gap-2 py-12 text-white items-center justify-center px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
          <div className="flex font-soraregular items-center text-lg justify-center">Let's pay</div>
          <div className="flex font-soraregular items-center text-lg justify-center">landowners to keep it as it is</div>
          <img src={KeepLandowners} alt="keep-landowners" />
        </div>
        <div className="flex flex-col w-full gap-2 py-12 text-white items-center justify-center px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
          <div className="flex font-soraregular items-center justify-center text-lg-4">Kolor Vs. Carbon Credits</div>
          <img src={KolorVsCarbon} alt="kolor-vs-carbon" />
        </div>
        <div className="flex flex-col w-full bg-partner gap-12 text-white items-center justify-center px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
          <div className="font-soralight text-md">PARTNERS & INVESTORS</div>
          <div className="flex flex-col gap-8">
            <div className="w-full grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 grid-flow-row gap-4 sm:gap-6 items-center">
              <img src={FloriLogo} alt="flori-logo" className="" />
              <img src={CeloLogo} alt="celo-logo" />
              <img src={ParqueLogo} alt="parque-logo" />
              <img src={ForpayLogo} alt="forpay-logo" />
              <img src={CookingLogo} alt="cooking-logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 py-12 text-white items-center justify-center px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
          <img src={Complexity} alt="complexity" />
        </div>
        <div className="flex flex-col w-full gap-12 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 py-12 text-white bg-news ">
          <div className="font-soraregular text-lg-4">
            Latest News
          </div>
          <div className="my-12 grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 sm:gap-12 xl:gap-16">
            {
              newsList.map((news, idx) => (
                <NewsItem key={idx} title={news.title} image={news.image} date={news.date} link={news.link} />
              ))
            }
          </div>
        </div>
      </Layout>
    </>
  )
}

export default LandingPage;