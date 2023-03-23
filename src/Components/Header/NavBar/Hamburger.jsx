import styles from "../../../styles";


const Hamburger = (props) => {
    return(
        <button className="flex flex-col gap-[0.6rem] md:hidden" onClick={props.setIsOpen}>
            <span className="inline-block w-[2.4rem] h-[0.3rem] bg-neutralGrayishViolet"></span>
            <span className={`inline-block w-[2.4rem] h-[0.3rem] bg-neutralGrayishViolet ${props.isOpen ? `translate-x-3 ${styles.transition}` : `translate-x-0 ${styles.transition}`}`}></span>
            <span className="inline-block w-[2.4rem] h-[0.3rem] bg-neutralGrayishViolet"></span>
        </button>
    )
}


export default Hamburger;