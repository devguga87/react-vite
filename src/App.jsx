import Header from "./components/Header"
import Post from "./Post"

import './global.css'

function App() {

  return (
    <div>
      <Header />
      <Post author='Diego Fernandes' content='Fundador rocketseat' />
      <Post author='Mike Brito'content='Instrutor Rocketseat'/>
    </div>
  )
}

export default App
