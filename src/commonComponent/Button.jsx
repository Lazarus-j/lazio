import style from "../Modules/button.module.css"

const Button=(props)=>{
    return(
        <button className={`${style.btn} ${props.className??style.btnLight}`}  onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;