function Hero() {
  return (
    <section className="swiper-slider-hero relative block h-screen" id="home">
      <div className="swiper-container absolute end-0 top-0 w-full h-full">
        <div className="swiper-wrapper">
          <div className="swiper-slide flex items-center overflow-hidden">
            <div
              className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;"
              data-background="assets/images/bg/01.jpg"
            >
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="container relative">
                <div className="grid grid-cols-1">
                  <div className="text-center">
                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                      Elevate Your Living Experience
                    </h1>
                    <p className="text-white/70 text-xl max-w-xl mx-auto">
                      Discover the epitome of luxury living with Junab Realty.
                    </p>

                    <div className="mt-6">
                      <a
                        href="/contact"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                {/*end grid*/}
              </div>
              {/*end container*/}
            </div>
            {/* end slide-inner */}
          </div>{" "}
          {/* end swiper-slide */}
          <div className="swiper-slide flex items-center overflow-hidden">
            <div
              className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;"
              data-background="assets/images/bg/02.jpg"
            >
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="container relative">
                <div className="grid grid-cols-1">
                  <div className="text-center">
                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                      We will help you find <br /> your Wonderful home
                    </h1>
                    <p className="text-white/70 text-xl max-w-xl mx-auto">
                      A great plateform to buy, sell and rent your properties
                      without any agent or commisions.
                    </p>

                    <div className="mt-6">
                      <a
                        href="#"
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                      >
                        See More
                      </a>
                    </div>
                  </div>
                </div>
                {/*end grid*/}
              </div>
              {/*end container*/}
            </div>
            {/* end slide-inner */}
          </div>{" "}
          {/* end swiper-slide */}
        </div>
        {/* end swiper-wrapper */}

        {/* swipper controls */}
        {/* <div className="swiper-pagination"></div> */}
        <div className="swiper-button-next bg-transparent w-[35px] h-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-green-600 hover:border-green-600 rounded-full text-center"></div>
        <div className="swiper-button-prev bg-transparent w-[35px] h-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-green-600 hover:border-green-600 rounded-full text-center"></div>
      </div>
      {/*end container*/}
    </section>
  );
}

export default Hero;
