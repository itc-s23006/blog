import styles from 'styles/post-categories.module.css'
import Link from 'next/link'

const PostCategories = ({ categories }) => {
  return (
    <ul className={styles.list}>
      {categories.map(({ name, slug }) => (
        <li key={slug}>
          <Link href={`/blog/category/${slug}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostCategories
