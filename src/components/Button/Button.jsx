import styles from './Button.module.css'

const Button = ({ isOutlined, text, icon }) => {
  return (
    <button className={isOutlined ? styles.outlined_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button