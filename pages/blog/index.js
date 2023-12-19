import Hero from 'components/hero'

const Blog = () => {
  const props1 = { title: 'Blog', subtitle: 'Recent Posts' }

  return (
    <section>
      <Hero {...props1} />
    </section>
  )
}

export default Blog
