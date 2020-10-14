import React from 'react';
import Button from '../lib/button/button';

const ButtonExample = () => {
    return (
        <div>
            <Button style={{marginRight: 10}}>Normal</Button>
            <Button style={{marginRight: 10}} level="important">Important</Button>
            <Button level="danger">Danger</Button>
        </div>
    );
};

export default ButtonExample;
