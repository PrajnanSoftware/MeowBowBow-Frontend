import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

        <App />
        <ToastContainer position="top-right" autoClose={3000} />
    </Provider>
  </StrictMode>,
)
