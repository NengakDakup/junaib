import React from 'react'
import { blogPosts } from '@/data/blogData'
import BlogPost from './Blog/BlogPost'

const FeaturedPosts = () => {
    const posts = blogPosts.slice(0, 3);
    return (
        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Posts</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Discover our latest blog posts and real estate insights to help you make informed decisions in your property journey.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                {posts.map((post) => (
                    <BlogPost key={post._id} post={post} />
                ))}
            </div>

            <div className="md:flex justify-center text-center mt-6">
                <div className="md:w-full">
                    <a href="/blog" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View More Posts <i className="uil uil-arrow-right ms-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts