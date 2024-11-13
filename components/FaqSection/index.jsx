"use client"
import { faq } from "@/data/faq"
import { useState } from "react"


function FaqSection() {
    const [ showAnswer, setShowAnswer ] = useState(false)
    const [ answerId, setAnswerId ] = useState()

    const faqQuestion = faq
    
    const handleShow = (idx) => {
        setShowAnswer((prev) => !prev)
        setAnswerId(idx)
    }

    return (
    <section className="relative lg:py-24 py-16">
    <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
                <div className="rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                    <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                        <li className="navbar-item font-semibold p-0"><a href="#tech" className="text-base font-medium navbar-link">Buying Questions</a></li>
                        <li className="navbar-item font-semibold mt-3 p-0"><a href="#general" className="text-base font-medium navbar-link">General Questions</a></li>
                        <li className="navbar-item font-semibold mt-3 p-0"><a href="#payment" className="text-base font-medium navbar-link">Payments Questions</a></li>
                        <li className="navbar-item font-semibold mt-3 p-0"><a href="#support" className="text-base font-medium navbar-link">Support Questions</a></li>
                    </ul>
                </div>
            </div>

            <div className="lg:col-span-8 md:col-span-7">
                <div id="tech">
                    <h5 className="text-2xl font-semibold">Buying Product</h5>

                    <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">

                        {
                            faqQuestion.map((item, idx) => (
                                <div onClick={() => handleShow(item.id)} key={idx} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden">
                                    <h2 className="text-lg font-medium" id="accordion-collapse-heading-1">
                                        <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span className={`${answerId === item.id ? 'text-green-600' : ''}`}>{item.qst}</span>
                                            <svg data-accordion-icon className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className={`${ showAnswer && answerId === item.id ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400 text-[15px]">{item.ans}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id="general" className="mt-8">
                    <h5 className="text-2xl font-semibold">General Questions</h5>

                    <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">

                        {
                            faqQuestion.map((item, idx) => (
                                <div onClick={() => handleShow(item.id)} key={idx} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden">
                                    <h2 className="text-lg font-medium" id="accordion-collapse-heading-1">
                                        <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{item.qst}</span>
                                            <svg data-accordion-icon className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className={`${ showAnswer && answerId === item.id ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.ans}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id="payment" className="mt-8">
                    <h5 className="text-2xl font-semibold">Payments Questions</h5>

                    <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">

                        {
                            faqQuestion.map((item, idx) => (
                                <div onClick={() => handleShow(item.id)} key={idx} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden">
                                    <h2 className="text-lg font-medium" id="accordion-collapse-heading-1">
                                        <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{item.qst}</span>
                                            <svg data-accordion-icon className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className={`${ showAnswer && answerId === item.id ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.ans}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id="support" className="mt-8">
                    <h5 className="text-2xl font-semibold">Support Questions</h5>

                    <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">

                        {
                            faqQuestion.map((item, idx) => (
                                <div onClick={() => handleShow(item.id)} key={idx} className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden">
                                    <h2 className="text-lg font-medium" id="accordion-collapse-heading-1">
                                        <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>{item.qst}</span>
                                            <svg data-accordion-icon className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className={`${ showAnswer && answerId === item.id ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.ans}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container relative lg:mt-24 mt-16">
        <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

            <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
        
            <div className="mt-6">
                <a href="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default FaqSection