import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const props = { title: 'Blog', subtitle: 'Recent Posts' }
const Home = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero {...props} />
    </Container>
  )
}

export default Home
