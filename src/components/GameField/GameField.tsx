import React from 'react';

interface Props extends React.PropsWithChildren{
  children: React.ReactNode
}
const GameField: React.FC<Props>= ({children}) => {
    return (
        <div className={'game-field'}>
            {children}
        </div>
    );
};

export default GameField;