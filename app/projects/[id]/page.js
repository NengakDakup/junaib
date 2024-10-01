'use client';

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { property } from "@/data/propertylisting";
import Image from "next/image";

const Project = ({ params }) => {
    const { id } = params;

    const propertyDetails = property

    return (
      <>
        <Header />

        <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
            <div className="md:flex mt-4">
                <div className="lg:w-1/2 md:w-1/2 p-1">
                    <div className="group relative overflow-hidden">
                        <Image src={propertyDetails?.img} alt={propertyDetails?.location} />
                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                            <a href={propertyDetails?.img} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="uil uil-camera"></i></a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 md:w-1/2">
                    <div className="flex">
                        <div className="w-1/2 p-1">
                            <div className="group relative overflow-hidden">
                                <img src="assets/images/property/single/2.jpg" alt="" />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <a href="assets/images/property/single/2.jpg" className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="uil uil-camera"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 p-1">
                            <div className="group relative overflow-hidden">
                                <img src="assets/images/property/single/3.jpg" alt="" />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <a href="assets/images/property/single/3.jpg" className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="uil uil-camera"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 p-1">
                            <div className="group relative overflow-hidden">
                                <img src="assets/images/property/single/4.jpg" alt="" />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <a href="assets/images/property/single/4.jpg" className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="uil uil-camera"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 p-1">
                            <div className="group relative overflow-hidden">
                                <img src="assets/images/property/single/5.jpg" alt="" />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <a href="assets/images/property/single/5.jpg" className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="uil uil-camera"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container md:mt-24 mt-16">
            <div className="md:flex">
                <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                    <h4 className="text-2xl font-medium">{propertyDetails?.location}</h4>

                    <ul className="py-6 flex items-center list-none">
                        <li className="flex items-center lg:me-6 me-4">
                            <i className="uil uil-compress-arrows lg:text-3xl text-2xl me-2 text-green-600"></i>
                            <span className="lg:text-xl">{propertyDetails?.squareFt}sqf</span>
                        </li>

                        <li className="flex items-center lg:me-6 me-4">
                            <i className="uil uil-bed-double lg:text-3xl text-2xl me-2 text-green-600"></i>
                            <span className="lg:text-xl">{propertyDetails?.bedRooms} Beds</span>
                        </li>

                        <li className="flex items-center">
                            <i className="uil uil-bath lg:text-3xl text-2xl me-2 text-green-600"></i>
                            <span className="lg:text-xl">{propertyDetails?.bathRooms} Baths</span>
                        </li>
                    </ul>

                    <p className="text-slate-400">{propertyDetails?.desc}</p>

                    <div className="w-full leading-[0] border-0 mt-6">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" 
                          style={{ border: 0 }} 
                          className="w-full h-[500px]" 
                          allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                    <div className="sticky top-20">
                        <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                            <div className="p-6">
                                <h5 className="text-2xl font-medium">Price:</h5>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-medium">$ {(propertyDetails?.price.toLocaleString())}</span>

                                    <span className={`bg-green-600/10 ${propertyDetails?.isSold ? 'text-red-600' : 'text-green-600' } text-sm px-2.5 py-0.75 rounded h-6`}>{propertyDetails?.isSold ? 'Sold' : 'For Sale'}</span>
                                </div>

                                <ul className="list-none mt-4">
                                    <li className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">Days on Hously</span>
                                        <span className="font-medium text-sm">124 Days</span>
                                    </li>

                                    <li className="flex justify-between items-center mt-2">
                                        <span className="text-slate-400 text-sm">Price per sq ft</span>
                                        <span className="font-medium text-sm">$ {Math.ceil(Number(propertyDetails?.price) / Number(propertyDetails?.squareFt))}</span>
                                    </li>

                                    <li className="flex justify-between items-center mt-2">
                                        <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                        <span className="font-medium text-sm">$ {Math.ceil(Number(propertyDetails?.price) / 12)}/Monthly</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex">
                                <div className="p-1 w-1/2">
                                    <a href="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Book Now</a>
                                </div>
                                <div className="p-1 w-1/2">
                                    <a href="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Offer Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                            <div className="mt-6">
                                <a href="/contact" className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
        <Footer />
      </>
    );
}

export default Project;
