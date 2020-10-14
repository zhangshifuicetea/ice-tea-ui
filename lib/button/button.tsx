import React from 'react';
import {ButtonHTMLAttributes} from 'react';
import './button.scss';
import {classes, createScopedClasses} from '../../utils/classes';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'important' | 'danger' | 'normal';
}

const sc = createScopedClasses('button');

const Button: React.FunctionComponent<Props> = (props) => {
    const {className, children, level, ...rest} = props;
    return (
        <button className={
            classes(sc(), sc(level), className)
        }
                {...rest}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    level: 'normal'
};

export default Button;
