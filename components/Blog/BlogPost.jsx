import Image from 'next/image';
import Link from 'next/link';

function BlogPost({ post }) {
    return (
        <div className="group relative rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
            <div className="relative overflow-hidden">
                <Image 
                    src={post.image} 
                    alt={post.title}
                    width={400}
                    height={300}
                    className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-6">
                <div className="flex gap-3 items-center">
                    <Image 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="ml-3">
                        <span className="block text-sm font-medium">{post.author.name}</span>
                        <span className="block text-xs text-gray-500">{post.date}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <Link href={`/blog/${post._id}`}>
                        <h3 className="text-xl font-medium hover:text-green-600 duration-500 ease-in-out">
                            {post.title}
                        </h3>
                    </Link>
                    <p className="text-slate-400 mt-3 text-sm">{post.excerpt}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.5 rounded">
                        {post.category}
                    </span>
                    <span className="flex items-center text-slate-400 text-sm">
                        <i className="uil uil-comment-alt-lines mr-2"></i>
                        {post.comments} Comments
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BlogPost; 