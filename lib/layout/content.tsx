import React from 'react';
import {classes, createScopedClasses} from '../../utils/classes';

const sc = createScopedClasses('layout');
interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Content: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;

    return (
        <div className={classes(sc('content'), className)} {...restProps}>
            {props.children}
        </div>
    );
};

export default Content;
