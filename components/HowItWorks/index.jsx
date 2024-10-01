import React from "react";

function HowItWorks() {
  return (
    <div className="container relative lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          How It Works
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <i
              data-feather="hexagon"
              className="h-32 w-32 fill-green-600/5 mx-auto"
            ></i>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <i className="uil uil-bullseye"></i>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Our Mission</h5>
            <p className="text-slate-400 mt-3">
                Roofing mission refers to the specific goals and objectives that Roofing company aims to
            </p>
          </div>
        </div>

        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <i
              data-feather="hexagon"
              className="h-32 w-32 fill-green-600/5 mx-auto"
            ></i>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <i className="uil uil-eye"></i>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Our Vision</h5>
            <p className="text-slate-400 mt-3">
                Roofing vision refers to the overall purpose or mission that a roofing companys to achieve
            </p>
          </div>
        </div>

        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <i
              data-feather="hexagon"
              className="h-32 w-32 fill-green-600/5 mx-auto"
            ></i>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <i className="uil uil-shield"></i>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Trusted Services</h5>
            <p className="text-slate-400 mt-3">
                Roofing vision refers to the overall purpose or mission that a roofing companys to achieve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
