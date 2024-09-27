

function Hero() {
  return (
    <section className="relative mt-20">
    <div className="container-fluid md:mx-4 mx-2">
      <div
        className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="md:text-start text-center">
              <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                We will help you find <br /> your{" "}
                <span className="text-green-600">Wonderful</span> home
              </h1>
              <p className="text-white/70 text-xl max-w-xl">
                A great plateform to buy, sell and rent your properties
                without any agent or commisions.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Hero