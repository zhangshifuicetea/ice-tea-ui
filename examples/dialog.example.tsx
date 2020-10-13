import React, {useState} from 'react';
import Dialog, {createDialog, confirm} from '../lib/dialog/dialog';

export default function () {
    const [x, setX] = useState(false);
    const openModal = () => {
        const close = createDialog(
            <h1>你好
                <button onClick={() => close()}>close</button>
            </h1>, [], '动态弹窗');
    };
    return (
        <div>
            <div>
                <h1>自定义按钮</h1>
                <button onClick={() => setX(!x)}>click</button>
                <Dialog visible={x} title={'标题'} buttons={
                    [
                        <button key={1} onClick={() => {setX(false);}}>1</button>,
                        <button key={2} onClick={() => {setX(false);}}>2</button>
                    ]
                } onClose={() => {setX(false);}}>
                    <strong>hi</strong>
                </Dialog>
            </div>

            <div>
                <h1>确认弹窗</h1>
                <button onClick={() => confirm('are you sure?', () => {
                    console.log('你点击了yes');
                }, () => {
                    console.log('你点击了no');
                }, '确认')}>confirm
                </button>
            </div>

            <div>
                <h1>动态创建Dialog</h1>
                <button onClick={openModal}>modal</button>
            </div>
        </div>
    );
}
