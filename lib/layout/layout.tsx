import React, {ReactElement} from 'react';
import {classes, createScopedClasses} from '../../utils/classes';
import Aside from './aside';

const sc = createScopedClasses('layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;

    const children = props.children as ReactElement[];

    const hasAside = children.length > 0 &&
        children.reduce((result, node) => {
            return result || node.type === Aside;
        }, false);

    return (
        <div className={classes(sc(), className, hasAside && 'has-aside')} {...restProps}>
            {props.children}
        </div>
    );
};

export {Layout};
export {default as Header} from './header';
export {default as Aside} from './aside';
export {default as Content} from './content';
export {default as Footer} from './footer';
export default Layout;
