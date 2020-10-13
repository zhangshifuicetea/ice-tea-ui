import React from 'react';
import {classes, createScopedClasses} from '../../utils/classes';

const sc = createScopedClasses('layout');
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Header: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;

    return (
        <div className={classes(sc('header'), className)} {...restProps}>
            {props.children}
        </div>
    );
};

export default Header;
