import Swap from './features/Swap/Swap'
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import SwapProvider from './Context/SwapContext';

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true)
  const toggleThemes = () => {
    setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('product-theme') as string)) {
      setDarkTheme(true)
    }
  }, [])

  useEffect(() => {
    const html = document.querySelector('html') as HTMLElement;
    html.classList.toggle('dark', darkTheme);
    localStorage.setItem('product-theme', JSON.stringify(darkTheme))
  }, [darkTheme])

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Header darkTheme={darkTheme} toggleThemes={toggleThemes} />
        <SwapProvider>
          <Swap />
        </SwapProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            top: 83,
            left: 10,
            bottom: 20,
            right: 10,
          }}
          toastOptions={{
            className: '',
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
              cursor: 'pointer'
            },
            success: {
              duration: 3000,
            },
          }}
        >
          {(t) => (<ToastBar toast={t}>
            {({ icon, message }) => (<p className='flex' onClick={() => { toast.dismiss(t.id) }}>
              {icon}
              {message}
            </p>)}
          </ToastBar>)}
        </Toaster>
      </div>
    </>
  )
}

export default App
