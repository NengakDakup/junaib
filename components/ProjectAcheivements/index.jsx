import React from 'react'
import BgImg from '@/public/assets/images/bg/01.jpg'

function ProjectAcheivements() {
  return (
    <section className={`relative py-24 bg-[url(${BgImg})] bg-no-repeat bg-center bg-fixed bg-cover`}>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="container relative">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
            <div className="lg:col-start-2 lg:col-span-10">
                <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                    
                    <div className="counter-box text-center">
                        <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="50">50</span>+</h1>
                        <h5 className="counter-head text-white text-lg font-medium">Properties Sold</h5>
                    </div>

                    
                    <div className="counter-box text-center">
                        <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="8">8</span>+</h1>
                        <h5 className="counter-head text-white text-lg font-medium">Award Gained</h5>
                    </div>

                    
                    <div className="counter-box text-center">
                        <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="9">0</span>+</h1>
                        <h5 className="counter-head text-white text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ProjectAcheivements