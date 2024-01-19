import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const UserPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
        const userData = await userResponse.json()
        setUser(userData)

        const todosResponse = await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${id}`
        )
        const todosData = await todosResponse.json()
        setTodos(todosData)
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    }

    if (id) {
      fetchUser()
    }
  }, [id])

  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}'s ToDo List</h1>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default UserPage
