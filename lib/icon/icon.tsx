import React from 'react';
import './importAllIcon';
import './icon.scss';
import {classes, createScopedClasses} from '../../utils/classes';

interface IconProps extends React.HtmlHTMLAttributes<HTMLElement> {
    name: string;
    fill?: string;
}

const componentName = 'Icon';
const sc = createScopedClasses(componentName);

const Icon: React.FC<IconProps> = (props) => {
    const {className, style, name, fill, ...rest} = props;
    return (
        <span className={classes(sc('wrapper'), className)} style={style} {...rest}>
            <svg className={sc('', name)}
                 style={{fill}}>
              <use xlinkHref={`#${name}`}/>
            </svg>
        </span>
    );
};

export default Icon;
