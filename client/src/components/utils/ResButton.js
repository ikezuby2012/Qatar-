import { Link } from "react-router-dom";

const ResButton = ({ onClose }) => {
    return (
        <div className="navigation-box">
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__items">
                        <a href="#faq" className="navigation__link" onClick={onClose}>faq</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#plans" className="navigation__link" onClick={onClose}>plans</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#testimonial" className="navigation__link" onClick={onClose}>testimonial</a>
                    </li>
                    <li className="navigation__items">
                        <Link to="/login" className="navigation__link" onClick={onClose}>sign in</Link>
                    </li>
                    <li className="navigation__items">
                        <Link to="/signup/:id" className="navigation__link" onClick={onClose}>create account</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ResButton;