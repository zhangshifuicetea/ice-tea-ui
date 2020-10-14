import * as React from 'react';
import {InputHTMLAttributes} from 'react';
import './input.scss';
import {classes, createScopedClasses} from '../../utils/classes';

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const sc = createScopedClasses('input');

const Input: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <input className={classes(sc(), className)}
               {...rest}/>
    );
};
export default Input;
