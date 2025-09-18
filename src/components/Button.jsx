import { Link } from 'react-router-dom';
import './Button.css';

function Button({ text, to, className }) {
    return (
        <div className="button">
            <Link to={to}>
            <button className={ className }>{text}</button>
        </Link>
        </div>
    );
}

export default Button;