import Header from "./components/Header"
import Post from "./Post"

import styles from './App.module.css'

import './global.css'
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author='Diego Fernandes' content='Fundador rocketseat' />
          <Post author='Mike Brito'content='Instrutor Rocketseat'/>
        </main>
        
      </div>
    </div>
  )
}

export default App
