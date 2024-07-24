import style from './textField.module.css'

const TextField = (props) => {
    return (
        <input className={style.TextField} type="text" {...props} />
    );
}

export { TextField };