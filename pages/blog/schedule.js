import { client } from 'lib/api'

const Schedule = () => {
  return <h1>記事のタイトル</h1>
}
const getStaticProps = async () => {
  console.log('処理１')
  setTimeout(() => console.log('処理２'), 1000)
  console.log('処理３')
  return {
    props: {}
  }
}

export default Schedule
export { getStaticProps }
