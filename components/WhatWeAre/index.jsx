import React from 'react'

function WhatWeAre() {
  return (
    <div className="container relative lg:mt-30 mt-24">
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="md:col-span-5">
            <div className="relative">
                <img src="assets/images/about.jpg" className="rounded-xl shadow-md" alt="" />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                        className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>

        <div className="md:col-span-7">
            <div className="lg:ms-4">
                <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Efficiency. Transparency. <br /> Control.</h4>
                <p className="text-slate-400 max-w-xl">At Junab, we believe that everyone deserves a home that reflects their lifestyle and aspirations. With a commitment to quality, innovation, and affordability, we have established ourselves as a trusted name in the real estate industry. Our passion for creating homes that blend luxury with smart technology sets us apart.</p>
                
                <div className="mt-4">
                    <a href="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">Learn More </a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default WhatWeAre