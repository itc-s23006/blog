import Hero from 'components/hero'

const Home = () => {
  const props1 = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }

  return (
    <section>
      <Hero {...props1} />
      imageOn
    </section>
  )
}

export default Home
