import style from './notFound.module.css'
const NotFound = () => {
    return (
        <div className={style.NotFound}>
            <h1>404</h1>
            <h2>Não tem nada aqui</h2>
        </div>
    )
}

export { NotFound }