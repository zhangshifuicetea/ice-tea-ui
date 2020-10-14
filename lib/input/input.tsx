import React, {InputHTMLAttributes} from 'react';
import {classes, createScopedClasses} from '../../utils/classes';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const sc = createScopedClasses('input');

const Input: React.FC<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <input className={classes(sc(), className)} {...rest}/>
    );
};

export default Input;
