
import { Toaster } from 'react-hot-toast'
import { RoutesMain } from './routes/Routes'
import GlobalStyle from './style/global'

function App() {

  return (
    <div className='App'>
      <GlobalStyle />
      <RoutesMain />
      <Toaster position='top-right' toastOptions={{ duration: 5000 }} />
    </div>
  )
}

export default App
