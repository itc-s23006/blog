import Hero from 'components/hero'
import Container from 'components/container'
const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: true
}
const Home = () => {
  return (
    <>
      <Container>
        <Hero {...props} />
      </Container>{' '}
    </>
  )
}

export default Home
