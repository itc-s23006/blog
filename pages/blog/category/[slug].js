import { getAllCategories } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'

const Category = ({ name }) => {
  return (
    <Container>
      <PostHeader title={name} subtitle='Blog Category' />
    </Container>
  )
}

const getStaticPaths = async () => {
  return {
    paths: ['/blog/category/technology'],
    fallback: false
  }
}

const getStaticProps = async context => {
  const catSlug = context.params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  return {
    props: {
      name: cat.name
    }
  }
}

export default Category
export { getStaticPaths }
export { getStaticProps }
