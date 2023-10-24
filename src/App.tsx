
import { Toaster } from 'react-hot-toast'
import { RoutesMain } from './routes/Routes'

function App() {

  return (
    <div className='App'>
      <RoutesMain />
      <Toaster position='top-right' toastOptions={{ duration: 5000 }} />
    </div>
  )
}

export default App
