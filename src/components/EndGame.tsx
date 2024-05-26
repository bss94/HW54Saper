import React from 'react';

interface Props {
    game: boolean;
}

const EndGame: React.FC<Props> = ({game}) => {
    const messageStyle = {
        display: 'none',
        color: 'red',
    };
    if (!game) {
        messageStyle.display = 'inline-block';
    }
    return (
        <div className={'message'} style={messageStyle}>
            <p>Complete: Item found</p>
        </div>
    );
};

export default EndGame;