import Layout from "../../layout";
import SwipeSlider from "../../components/slider/swipeslider";
import { galleryList } from "./gallery";
import ArrowRight from "../../assets/icon/right_arrow.png";
import Video from "../../assets/images/video.png";
import Mark from "../../assets/images/community-mark.png";
import RightImageGroup from "../../assets/images/community-middle-right.png";
import LeftImageGroup from "../../assets/images/community-middle-left.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Community = () => {

  const responsive = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];

  return (
    <>
      <Layout title="Community">
        <div className="flex flex-col min-h-screen gap-24">
          <div className="flex flex-col bg-community min-h-screen pt-56 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 w-full">
            <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col">
              <div className="font-semibold text-md text-white">Now Protecting More Than</div>
              <div className="flex text-lg-4 text-gradient">20K Patagonian</div>
              <div className="text-lg-4 text-gradient">Hectares</div>
              <div className="font-soralight text-app-dark-400 text-sm py-4">
                Let's REDD+ endangered Patagonia Kolor has recently partnered with Fundo Quilan: 20k private endangered hectares, located in northern Patagonia. It's landowners are struggling to monetary sustain the land. Help us protect the land's dense biodiversity.
              </div>
              <div className="flex gap-6 py-12">
                <button className="button-gradient text-sm text-white h-16 px-12 rounded-full">
                  <div className="flex gap-4">
                    Contact Us
                    <img src={ArrowRight} alt="arrow-right" className="py-3" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center px-2 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 w-full">
            <div className="flex text-white text-lg-4">REDD+</div>
            <div className="flex font-soralight text-app-dark-400 text-sm items-center justify-items-center">
              With 1% annual forest reduction rate, this place is endangered to
            </div>
            <div className="flex font-soralight text-app-dark-400 text-sm">be completely vanished in the next 100 years</div>
            <img src={Video} alt="video" />
          </div>
          <div className="flex flex-col gap-12 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 bg-middleright min-h-screen">
            <div className="flex flex-col items-center gap-2">
              <div className="text-md text-gradient">In deep wilderness, Fundo</div>
              <div className="text-md text-gradient">Quilan fosteres</div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-12 w-full">
              <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 justify-center gap-6">
                <div className="flex gap-6 items-center">
                  <img src={Mark} alt="mark" />
                  <div className="text-gradient text-md">Fauna</div>
                </div>
                <div className="font-soralight text-sm-1 text-app-dark-400">This Photoshop's version of Lorem Ipsum Proin gravida nibh vel velit auctor aliquet. Aenean sollicitiudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan i</div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 lg:w-2/3">
                <img src={RightImageGroup} alt="right-group" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 bg-middleleft min-h-screen">
            <div className="flex flex-col-reverse md:flex-row gap-12 w-full">
              <div className="flex flex-col w-full md:w-1/2 lg:w-2/3">
                <img src={LeftImageGroup} alt="left-group" />
              </div>
              <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 justify-center gap-6">
                <div className="flex gap-6 items-center">
                  <img src={Mark} alt="mark" />
                  <div className="text-gradient text-md">Flora</div>
                </div>
                <div className="font-soralight text-sm-1 text-app-dark-400">This Photoshop's version of Lorem Ipsum Proin gravida nibh vel velit auctor aliquet. Aenean sollicitiudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan i</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 items-center justify-center">
            <div className="font-soraregular text-app-dark-400 text-md">Gallery Fundo Quilan Fosters</div>
          </div>
          <SwipeSlider responsive={responsive} images={galleryList} />
        </div>
      </Layout>
    </>
  )
}

export default Community;