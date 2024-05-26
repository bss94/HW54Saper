import React from 'react';

interface Props {
    onResetClick: React.MouseEventHandler;
}

const Buttons: React.FC<Props> = ({onResetClick}) => {
    return (
        <button onClick={onResetClick}>Reset</button>
    );
};

export default Buttons;