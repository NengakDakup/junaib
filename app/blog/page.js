import BlogList from '@/components/Blog/BlogList'
import BlogHero from '@/components/BlogHero'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'

const Blog = () => {
  return (
    <>
        <Header />

        <BlogHero />

        <div className='mt-20 mb-20'>
          <BlogList />

        </div>

        <Footer />
    </>
  )
}

export default Blog