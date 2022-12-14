import {format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'

const Post = ({author:{avatarUrl, name, role}, publishedAt, content}) => {
  const [comments,setComments] = useState(['Post muito bacana hein?'])
  const [newCommentText, setNewCommentText] = useState('')

  const formIsValid = newCommentText.trim().length !== 0

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale:ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix:true
  })

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value)
  }

  const deleteComment = (comment) => {
    setComments(prev => prev.filter(element => element !== comment))
  }

  const handleCreateNewComment = (event) => {
    event.preventDefault()

    if(!formIsValid){
      return 
    }

    setComments(prev => [...prev,newCommentText])

    setNewCommentText('')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          if(item.type === 'paragraph'){
            return <p key={item.content}>{item.content}</p>
          }
          if(item.type === 'link'){
            return  <p key={item.content}><a>{item.content}</a></p>
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentario'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit' disabled={!formIsValid}>Publicar</button>
        </footer>
      </form>
      
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  )
}

export default Post