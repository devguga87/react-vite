import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=60" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/55398608?v=4" />
        <strong>Diego Fernandes</strong>
        <span>FrontEnd Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar