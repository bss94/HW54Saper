import React from 'react';

interface Props{
    count:number
}
const Counter : React.FC<Props> = ({count}) => {
    return (
        <div>
            <h1>Tries: {count}</h1>
        </div>
    );
};

export default Counter;