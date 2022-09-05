import {format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'

const Post = ({author:{avatarUrl, name, role}, publishedAt, content}) => {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale:ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix:true
  })

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
            return <p>{item.content}</p>
          }
          if(item.type === 'link'){
            return  <p><a>{item.content}</a></p>
          }
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentario'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

export default Post