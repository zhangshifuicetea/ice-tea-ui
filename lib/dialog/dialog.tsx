import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {classes, createScopedClasses} from '../../utils/classes';
import './dialog.scss';
import {Icon} from '../index';
import Button from '../button/button';

interface Props {
    visible: boolean;
    title?: string;
    className?: string;
    buttons?: ReactElement[];
    onClose?: React.MouseEventHandler;
    maskClosable?: boolean;
}

const componentName = 'Dialog';
const sc = createScopedClasses(componentName);

const Dialog: React.FC<Props> = (props) => {
    const {className, title, visible, buttons, onClose, maskClosable = true} = props;

    const onClickClose: React.MouseEventHandler = (e) => {
        if (onClose) {onClose(e);}
    };

    const onClickMask: React.MouseEventHandler = (e) => {
        if (maskClosable && onClose) {
            onClose(e);
        }
    };

    const dialog = visible ?
        <Fragment>
            <div className={classes(sc('mask'), className)} onClick={onClickMask}/>
            <div className={sc('')}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon name={'close'}/>
                </div>
                <header className={sc('header')}>
                    {title || '通知'}
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                {
                    buttons && buttons.length > 0 &&
                    <footer className={sc('footer')}>
                        {buttons}
                    </footer>
                }
            </div>
        </Fragment>
        : null;

    return (
        ReactDOM.createPortal(dialog, document.body)
    );
};

const createDialog = (content: ReactNode, buttons?: React.ReactElement[], title?: string) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };

    const component = (
        <Dialog visible={true}
                title={title}
                onClose={close}
                buttons={buttons}>
            {content}
        </Dialog>
    );

    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);

    return close;
};

const confirm = (content: string, yes?: () => void, no?: () => void, title?: string) => {
    const onYes = () => {
        close();
        yes && yes();
    };

    const onNo = () => {
        close();
        no && no();
    };

    const buttons = [
        <Button level="important" onClick={onYes} key={1}>yes</Button>,
        <Button style={{marginLeft: 15}} onClick={onNo} key={2}>no</Button>
    ];

    const close = createDialog(content, buttons, title);

    return close;
};

export {confirm, createDialog};
export default Dialog;
