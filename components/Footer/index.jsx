
function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
    <div className="container relative">
        <div className="grid grid-cols-1">
            <div className="relative py-16">
                
                <div className="relative w-full">
                    <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                            <div className="md:text-start text-center z-1">
                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Subscribe to Newsletter!</h3>
                                <p className="text-slate-400 max-w-xl mx-auto">Subscribe to get latest updates and information.</p>
                            </div>

                            <div className="subcribe-form z-1">
                                <form className="relative max-w-lg md:ms-auto">
                                    <input type="email" id="subcribe" name="email" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" placeholder="Enter your email :" />
                                    <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-full">Subscribe</button>
                                </form>
                            </div>
                        </div>

                        <div className="absolute -top-5 -start-5">
                            <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                        </div>

                        <div className="absolute -bottom-5 -end-5">
                            <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                        </div>
                    </div>

                    <div className="flex items-start justify-between gap-[30px] -mt-24 w-full md:flex-col">
                        <div className="flex-1">
                            <a href="#" className="text-[22px] focus:outline-none">
                                <img src="assets/images/logo-light.png" alt="" />
                            </a>
                            <p className="mt-6 text-gray-300">Uncover why Junab Realty stands out in the real estate market.</p>
                    
                        </div>
                
                        <div className="flex-1">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                            <ul className="list-none footer-list mt-6">
                                <li><a href="/blog" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i>Blog</a></li>
                                <li className="mt-[10px]"><a href="/about" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i>About us</a></li>
                                <li className="mt-[10px]"><a href="/properties" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i>Properties</a></li>
                                <li className="mt-[10px]"><a href="/faq" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i>FAQ</a></li>
                                <li className="mt-[10px]"><a href="/contact" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i>Contact</a></li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">Contact Details</h5>
                    
                    
                            <div className="flex mt-6">
                                <i data-feather="map-pin" className="w-5 h-5 text-green-600 me-3"></i>
                                <div className="">
                                    <h6 className="text-gray-300 mb-2">Abuja, <br />Nigeria</h6>
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox">View on Google map</a>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <i data-feather="mail" className="w-5 h-5 text-green-600 me-3"></i>
                                <div className="">
                                    <a href="mailto:junabrealty@gmail.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">junabrealty@gmail.com</a>
                                </div>
                            </div>
                    
                            <div className="flex mt-6">
                                <i data-feather="phone" className="w-5 h-5 text-green-600 me-3"></i>
                                <div className="">
                                    <a href="tel:2349012703920" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+234-901-2703-920</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
        <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
                <div className="md:text-start text-center">
                    <p className="mb-0 text-gray-300">© {new Date().getFullYear()} Junab.</p>
                </div>

            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer