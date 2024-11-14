import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'

const BlogDetails = () => {
  return (
    <>
        <Header />

        <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.html')] bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/assets/images/bg/01.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Blog Title Goes Here</h3>
                    <div className="flex justify-center items-center gap-3 mt-4">
                        <p className="text-white">Posted by: <span className="text-white">Admin</span></p>
                        <span className="text-white">•</span>
                        <p className="text-white">20th February, 2023</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <div className="container mt-16">
            <div className="grid grid-cols-1">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                    <img src="/assets/images/blog/01.jpg" className="w-full h-[400px] object-cover rounded-md" alt="" />
                    
                    <div className="mt-6">
                        <p className="text-slate-400">Published: <span className="text-slate-600 dark:text-white">20th February, 2023</span></p>
                        
                        <h3 className="my-3 text-2xl font-medium">Blog Title Goes Here</h3>
                        
                        <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                        <p className="text-slate-400 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default BlogDetails