import { propertyListing } from '@/data/propertylisting'
import Image from 'next/image';
import Link from 'next/link';

function PropertyListing() {

    const properties = propertyListing
  return (
    <section className="relative lg:py-24 py-16">
    <div className="container relative">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">

            {
                properties.map((item) => (
                    <div key={item._id} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div className="relative">
                            <Image src={item.img} alt={item.location} />

                            <div className="absolute top-4 end-4">
                                <a href="javascript:void(0)" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart text-[20px]"></i></a>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="pb-6">
                                <Link href={`/projects/${item._id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.location}</Link>
                            </div>

                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                <li className="flex items-center me-4">
                                    <i className="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                                    <span>{item.squareFt}sqf</span>
                                </li>

                                <li className="flex items-center me-4">
                                    <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                                    <span>{item.bedRooms} Beds</span>
                                </li>

                                <li className="flex items-center">
                                    <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                                    <span>{item.bathRooms} Baths</span>
                                </li>
                            </ul>

                            <ul className="pt-6 flex justify-between items-center list-none">
                                <li>
                                    <span className="text-slate-400">Price</span>
                                    <p className="text-lg font-medium">${item.price}</p>
                                </li>

                                <li>
                                    <span className="text-slate-400">Rating</span>
                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline text-black dark:text-white">5.0(30)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            }

        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
                <nav>
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                <i className="uil uil-angle-left text-[20px]"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</a>
                        </li>
                        <li>
                            <a href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">3</a>
                        </li>
                        <li>
                            <a href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</a>
                        </li>
                        <li>
                            <a href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                <i className="uil uil-angle-right text-[20px]"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</section>
  )
}

export default PropertyListing