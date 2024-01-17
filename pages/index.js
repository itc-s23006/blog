import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

const Home = ({ posts }) => {
  return (
    <>
      <Container>
        <Meta />
        <Hero {...props} />
        <Posts posts={posts} />
        <Pagination nextUrl='/blog' nextText='MorePosts' />
      </Container>
    </>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty.call('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts
    }
  }
}

export default Home
export { getStaticProps }
