import Hero from 'components/hero'
import Container from 'components/container'
const props = { title: 'Blog', subtitle: 'Recent Posts' }
const Home = () => {
  return (
    <Container>
      <Hero {...props} />
    </Container>
  )
}

export default Home
