import Layout from "../../layout";
import { useAppContext } from "../../context/AppContext";
import LandOwnerItem from "../../components/items/landowneritem";
import FaqItem from "../../components/items/faqitem";
import { roadmapList } from "./roadmap";
import { landownersList } from "./landowners";
import { faqList } from "./faqs";
import BannerLandowners from "../../assets/images/banner-landowners.png"
import ArrowRight from "../../assets/icon/right_arrow.png";
import Contract from "../../assets/images/contract.png";
import Fee from "../../assets/images/fee.png";
import Hectare from "../../assets/images/hectare.png";
import Roadmap from "../../assets/images/roadmap.png";
import VerticalRoadmap from "../../assets/images/roadmap-vertical.png";

const Landowners = () => {
  const context = useAppContext();

  const handleFaqClicked = (id: number) => {
    let _faqStatus: boolean[] = [false, false, false, false, false, false];
    for(let i = 0; i < context.faqStatus.length; i++) {
      if(id === i) {
        _faqStatus[i] = !context.faqStatus[i];
      }
    }

    context.setFaqStatus(_faqStatus);
  }
  return (
    <>
      <Layout title="Landowners">
        <div className="flex flex-col min-h-screen w-full gap-24">
          <div className="flex flex-col items-center justify-center w-full px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 pt-44 text-white">
            <div className="text-md lg:text-lg-4 text-gradient">How To Create revenue</div>
            <div className="text-md lg:text-lg-4">From conservation</div>
            <div className="text-md lg:text-lg-4">with Kolor</div>
            <div className="flex flex-col lg:flex-row gap-12 py-12">
              <div className="w-full lg:w-1/2">
                <img src={BannerLandowners} alt="banner-landowners" />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                <div className="font-soralight text-md text-gradient">
                  Monetizing Conservation and Carbon Mitigation for Landowners
                </div>
                <div className="font-soralight text-sm-1 text-app-dark-400">
                  Now enrolling Patagonian landowners. Kolor enables Patagonian landowners to get payed to protect land in a climate responsible way, as companies benefit from carbon mitigation and ESG promotion. Join the movement now.
                </div>
                <div className="flex">
                  <button className="button-gradient text-sm text-white h-16 px-12 rounded-full">
                    <div className="font-sorasemibold flex gap-4">
                      Contact Us
                      <img src={ArrowRight} alt="arrow-right" className="py-3" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-24 w-full px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
            <div className="flex flex-col w-full lg:w-1/2 text-white gap-6">
              <div className="text-lg-4">Enroll now</div>
              <div className="text-lg-4">Get paid to conserve.</div>
              <div className="font-soralight text-sm-1 text-app-dark-400">Being nature friendly is a beautiful task, yet it takes a lot of effort, as monetary rewards are hard to follow. We're offering landowners flexible 1 year terms, allowing them to re-evaluate their purposes every year. With our carbon absorption calculoator, you won't have to face onsite measurements.</div>
              <div className="font-soralight text-sm-1 text-app-dark-400">Get Started today, receive money for your conservation effort and value your carbon potential.</div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-8 justify-center">
              <div className="h-20 w-full md:w-3/4 rounded-4xl bg-gradient py-2 px-2">
                <div className="flex">
                  <div className="flex w-3/4 h-16 gap-6">
                    <div className="bg-black rounded-3xl w-16">
                      <img src={Contract} alt="contract" className="ml-4 my-3 mx-auto w-9" />
                    </div>
                    <div className="flex flex-col text-white justify-center">
                      <div className="font-soralight">Contract</div>
                      <div className="font-soralight">Length:</div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 text-white justify-center">
                    <div className="font-soraregular text-sm">
                      1 Year
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-20 w-full md:w-3/4 rounded-4xl bg-body py-2 px-2">
                <div className="flex">
                  <div className="flex w-3/4 h-16 gap-6">
                    <div className="bg-black rounded-3xl w-16">
                      <img src={Fee} alt="fee" className="ml-4 my-3 mx-auto w-9" />
                    </div>
                    <div className="flex flex-col text-white justify-center">
                      <div className="font-soralight">Fees to</div>
                      <div className="font-soralight">participate:</div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 text-white justify-center">
                    <div className="font-soraregular text-sm">
                      $0
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-20 w-full md:w-3/4 rounded-4xl bg-body py-2 px-2">
                <div className="flex">
                  <div className="flex w-3/4 h-16 gap-6">
                    <div className="bg-black rounded-3xl w-16">
                      <img src={Hectare} alt="hectare" className="ml-4 my-3 mx-auto w-9" />
                    </div>
                    <div className="flex flex-col text-white justify-center">
                      <div className="font-soralight">Hectare</div>
                      <div className="font-soralight">Minimum:</div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 text-white justify-center">
                    <div className="font-soraregular text-sm">
                      None
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-40 bg-enroll px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="text-lg-4 text-white">Landowners</div>
              <div className="text-lg-4 text-white">Enrollment & Operation</div>
            </div>
            <div className="flex flex-row md:flex-col gap-6">
              <div className="hidden md:block">
                <img src={Roadmap} alt="roadmap" />
              </div>
              <div className="hidden">
                <img src={VerticalRoadmap} alt="roadmap-vertical" />
              </div>
              <div className="flex flex-col md:flex-row">
                {
                  roadmapList.map((map, idx) => (
                    <>
                      <div key={idx} className="flex flex-col w-full md:w-1/4">
                        <div className="font-sorasemibold text-white text-lg-4">{map.id}</div>
                        <div className="text-sm text-gradient">
                          {map.title}
                        </div>
                        <div className="font-soralight flex text-app-dark-400 w-3/4">
                          {map.content}
                        </div>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48 gap-16">
            <div className="text-lg-4 text-white">Our Landowners</div>
            <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 xl:gap-16 3xl:gap-24">
              {
                landownersList.map((landowner, idx) => (
                  <LandOwnerItem key={idx} name={landowner.name} detail={landowner.detail} photo={landowner.photo} description={landowner.description} />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-16 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
            <div className="text-lg-4 text-white">FAQs</div>
            <div className="flex flex-col gap-6 w-full">
              {
                faqList.map((dt, idx) => {
                  return(
                    <FaqItem {...dt} key={idx} id={idx} handleFaqClicked={handleFaqClicked} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Landowners;