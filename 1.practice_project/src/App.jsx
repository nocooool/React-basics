import './App.css'
import Navigation from './components/Navigation'
import ContactHead from './components/ContactHead'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
      <div className='m-auto font-poppins flex flex-col'>
        <Navigation />
        <div className='flex justify-center flex-grow'>
          <main className='flex w-[calc(100vh-72px)] flex-col justify-end '>
            <ContactHead />
            <ContactForm />
          </main>
          <img src="/images/contact.svg" alt="image" /> 
        </div>
      </div>
    </>
  )
}

export default App
