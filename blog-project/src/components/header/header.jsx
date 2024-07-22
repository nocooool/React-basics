import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authstatus = useSelector((state) => 
    {if(state.auth){
      return state.auth.status
    }
  })
  
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authstatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authstatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authstatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authstatus
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((items)=>
              {items.active ? (
                <li key={items.name}>
                  <button
                  onClick={() => navigate(items.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {items.name}
                  </button>
                </li>
              ) : null}
            )}
            {authstatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header