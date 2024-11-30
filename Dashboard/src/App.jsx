import { Routes, Route  } from 'react-router-dom' 
import { Layout } from  './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { Members } from './pages/Members.jsx'
import { Messages } from './pages/Messages.jsx'

function App() {
  return (
  
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Members />} />
          <Route path="menbers" element={<Home />} />
          <Route path="messages" element={<Messages />} />
        </Route>
    </Routes>

  )
}

export default App
