import style from './content.module.css';
import PropTypes from 'prop-types';

const Content = ( props ) => {
    const { children } = props

    return (
        <div className={style.Content}>
           { children }
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

export { Content }