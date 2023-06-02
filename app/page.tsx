import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      hello moto
      <div
        p="20px"
        bg="red"
        className="bg-blue"
        text="white"
      >test</div>
   </div>
  )
}
