import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import Avatar from './Avatar'
import styles from './Comment.module.css'

const Comment = ({content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment= ()=>{
    onDeleteComment(content)
  }

  const handleLikeComment = () =>  {
    setLikeCount(prev => prev + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/55398608?v=4" />
      <div className={styles.commentBox}> 
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Seabra</strong>
              <time title='11 de maio as 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atras</time>
            </div>
            <button title='Deletar comentario' onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment