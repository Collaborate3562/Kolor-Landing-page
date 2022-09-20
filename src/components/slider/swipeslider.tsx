import Slider from "react-slick"

type Props = {
  responsive: any;
  images: any;
}

function SwipeSlider({ responsive, images }: Props) {
  var settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    swipeToSlide: true,
    responsive: responsive
  };

  return (
    <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
      <Slider {...settings}>
        {images.map((slide: any, index: any) => (
          <div className="flex flex-col" key={index}>
            <img className="flex p-4" src={slide.urls} alt={slide.title} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SwipeSlider;