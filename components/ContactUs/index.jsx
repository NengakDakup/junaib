
function ContactUs() {
  return (
    <section className="relative lg:py-24 py-16">
    <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
                <img src="assets/images/svg/contact.svg" alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
                <div className="lg:me-5">
                    <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                        <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

                        <form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
                            <p className="mb-0" id="error-msg"></p>
                            <div id="simple-msg"></div>
                            <div className="grid lg:grid-cols-12 lg:gap-6">
                                <div className="lg:col-span-6 mb-5">
                                    <label for="name" className="font-medium">Your Name:</label>
                                    <input name="name" id="name" type="text" className="form-input mt-2" placeholder="Name :" />
                                </div>

                                <div className="lg:col-span-6 mb-5">
                                    <label for="email" className="font-medium">Your Email:</label>
                                    <input name="email" id="email" type="email" className="form-input mt-2" placeholder="Email :" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <label for="subject" className="font-medium">Your Question:</label>
                                    <input name="subject" id="subject" className="form-input mt-2" placeholder="Subject :" />
                                </div>

                                <div className="mb-5">
                                    <label for="comments" className="font-medium">Your Comment:</label>
                                    <textarea name="comments" id="comments" className="form-input mt-2 textarea" placeholder="Message :"></textarea>
                                </div>
                            </div>
                            <button type="submit" id="submit" name="send" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container relative lg:mt-24 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <i data-feather="hexagon" className="h-32 w-32 fill-green-600/5 mx-auto"></i>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                        <i className="uil uil-phone"></i>
                    </div>
                </div>

                <div className="content mt-7">
                    <h5 className="title h5 text-xl font-medium">Phone</h5>
                    <p className="text-slate-400 mt-3">Contact us via our phoen line open 8:am - 5:pm monday - saturday</p>
                    
                    <div className="mt-5">
                        <a href="tel:+2349012703920" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">+234-901-2703-920</a>
                    </div>
                </div>
            </div>

            <div className="text-center px-6">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <i data-feather="hexagon" className="h-32 w-32 fill-green-600/5 mx-auto"></i>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                        <i className="uil uil-envelope"></i>
                    </div>
                </div>

                <div className="content mt-7">
                    <h5 className="title h5 text-xl font-medium">Email</h5>
                    <p className="text-slate-400 mt-3">send us an Email us today</p>
                    
                    <div className="mt-5">
                        <a href="mailto:junabrealty@gmail.com" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">junabrealty@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className="text-center px-6">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <i data-feather="hexagon" className="h-32 w-32 fill-green-600/5 mx-auto"></i>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                        <i className="uil uil-map-marker"></i>
                    </div>
                </div>

                <div className="content mt-7">
                    <h5 className="title h5 text-xl font-medium">Location</h5>
                    <p className="text-slate-400 mt-3">Abuja, <br /> Nigeria</p>
                    
                    <div className="mt-5">
                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        data-type="iframe" className="video-play-icon read-more lightbox btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View on Google map</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactUs