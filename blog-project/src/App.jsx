import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Header, Footer, Container} from './components'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false)) //it make the method to run in any case error or not
  })

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header />
          <main>
            {/* <outlet /> */}
          </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
