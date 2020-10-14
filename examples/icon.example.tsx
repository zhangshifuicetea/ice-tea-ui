import React from 'react';
import {Icon} from '../lib';

const IconExample: React.FC = () => {
    return (
        <>
            <div>
                <Icon name={'wechat'} fill={'forestgreen'}/>
                <Icon name={'alipay'} fill={'royalblue'}/>
            </div>

            <div style={{marginTop: 10}}>
                <Icon name={'close'}/>
                <Icon name={'left'}/>
                <Icon name={'right'}/>
                <Icon name={'double-left'}/>
                <Icon name={'double-right'}/>
            </div>

           <div style={{marginTop: 10}}>
               <Icon name={'loading'} spinning={true}/>
           </div>
        </>
    );
};

export default IconExample;
