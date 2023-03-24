import styles from "../styles"

const Button = (props) => {
    return(
        <button className={`${props.classes} px-[2.3rem] py-[1.2rem] md:py-[0.9rem] bg-primaryCyan text-white capitalize rounded-full hover:opacity-70 ${styles.transition}`}>
            {props.children}
        </button>
    )
}

export default Button