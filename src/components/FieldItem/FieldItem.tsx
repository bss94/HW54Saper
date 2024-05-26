import React from 'react';

interface Props {
    hasItem: boolean;
    clicked: boolean;
    clickOnItem: (position: number) => void;
    index: number;
}
const FieldItem: React.FC<Props> = ({hasItem, clickOnItem, index, clicked}) => {
    const itemClass = ['item'];
    const spanStyle = {
        display: 'none'
    };
    if (clicked) {
        itemClass.push('open');
        spanStyle.display = 'inline-block';
    }
    return (
        <div className={itemClass.join(' ')} onClick={() => clickOnItem(index)}>
            {hasItem ? <span style={spanStyle}> O </span> : <span style={spanStyle}></span>}
        </div>
    );
};

export default FieldItem;