import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Success from './pages/Success.jsx'
import { GlobalStyles } from './GlobalStyles.jsx'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Theme.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
    <StrictMode>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Provider store={store}>
              <App/>
            </Provider>
          }/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
)