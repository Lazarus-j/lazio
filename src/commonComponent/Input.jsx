import style from '../Modules/input.module.css';

const Input = (props) => {
    return (
        <div className={style.inputs}>
            <input 
                type={props.type ?? 'text'} 
                id={props.id ?? undefined} 
                placeholder={props.placeHolder ?? undefined} 
                className={`${style.input} ${props.className ?? style.inputLight}`} 
                pattern={`${props.pattern??undefined}`}
                required={props.required ?? false} 
            />
            {props.i && <i className={`bx ${style.i} ${props.i ?? style.hide} ${props.iCol=='dk'?style.iDark:style.iLight}`}></i>}
        </div>
    );
}

export default Input;
