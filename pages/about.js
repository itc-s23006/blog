import Hero from 'components/hero'

const About = () => {
  const props1 = { title: 'About', subtitle: 'About development activities' }

  return (
    <section>
      <Hero {...props1} />
    </section>
  )
}

export default About
