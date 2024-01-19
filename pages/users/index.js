import { useEffect, useState } from 'react'

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        const usersData = await response.json()
        setUsers(usersData)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
