import { useContext } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import styles from './styles.module.scss'

export function SendMessageForm() {
  const { user } = useContext(AuthContext)

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size="32"/>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </strong>
      </header>

      <form className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea name="message" id="message" placeholder="Qual a sua expectativa para o evento?"></textarea>

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  )
}