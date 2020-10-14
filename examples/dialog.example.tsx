import React, {useState} from 'react';
import Dialog, {createDialog, confirm} from '../lib/dialog/dialog';
import Button from '../lib/button/button';

export default function () {
    const [x, setX] = useState(false);
    const openModal = () => {
        const close = createDialog(
            <h1>你好
                <Button onClick={() => close()}>close</Button>
            </h1>, [], '动态弹窗');
    };
    return (
        <div>
            <div style={{marginBottom: 20}}>
                <h1>自定义按钮</h1>
                <Button onClick={() => setX(!x)}>click</Button>
                <Dialog visible={x} title={'标题'} buttons={
                    [
                        <Button level="important" key={1} onClick={() => {setX(false);}}>确认</Button>,
                        <Button key={2} onClick={() => {setX(false);}} style={{marginLeft: 15}}>取消</Button>
                    ]
                } onClose={() => {setX(false);}}>
                    <strong>hi</strong>
                </Dialog>
            </div>

            <div style={{marginBottom: 20}}>
                <h1>确认弹窗</h1>
                <Button onClick={() => confirm('are you sure?', () => {
                    console.log('你点击了yes');
                }, () => {
                    console.log('你点击了no');
                }, '确认')}>confirm
                </Button>
            </div>

            <div>
                <h1>动态创建Dialog</h1>
                <Button onClick={openModal}>modal</Button>
            </div>
        </div>
    );
}
