import React from 'react'
import { propertyListing } from '@/data/propertylisting'
import Property from './PropertyLisitings/Property'

const FeaturedProperties = () => {
    const properties = propertyListing.slice(0, 3);
    return (
        <div class="container relative lg:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                {properties.map((item) => (
                    <Property key={item._id} item={item} />
                ))}
            </div>

            <div class="md:flex justify-center text-center mt-6">
                <div class="md:w-full">
                    <a href="/properties" class="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View More Properties <i class="uil uil-arrow-right ms-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties