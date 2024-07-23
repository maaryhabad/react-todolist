import style from './footer.module.css';
import PropTypes from 'prop-types';

const Footer = (props) => {
    const { creatorName } = props;
    
    const currentYear = new Date().getFullYear();

    return (
        <div className={style.Footer}>
            <p>React Básico | {currentYear} | Feito com ❤️ por {creatorName}</p>
        </div>
    )
}

Footer.propTypes = {
    creatorName: PropTypes.string.isRequired,
};

export { Footer }