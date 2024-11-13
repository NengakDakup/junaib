import { blogPosts } from '@/data/blogData';
import BlogPost from './BlogPost';

function BlogList() {
    return (
        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {blogPosts.map((post) => (
                        <BlogPost key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogList; 