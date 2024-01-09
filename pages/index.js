import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: true
}
const Home = () => {
  return (
    <>
      <Container>
        <Meta />
        <Hero {...props} />
      </Container>{' '}
    </>
  )
}

export default Home
