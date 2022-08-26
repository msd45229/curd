import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    mobileno: '',
  })
  const { id } = useParams()
  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:4500/user/${id}`)
    setUser(res.data)
  }
  return (
    <div>
      <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
        <h1 className="display-4 py-4">User id:{id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name:{user.name}</li>
          <li className="list-group-item">user name:{user.username}</li>
          <li className="list-group-item">email:{user.email}</li>
          <li className="list-group-item">Mobile no:{user.mobileno}</li>
        </ul>
      </div>
    </div>
  )
}

export default View
