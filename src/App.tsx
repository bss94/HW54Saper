import './App.css';
import {useState} from 'react';
import Counter from './components/Counter/Counter.tsx';
import Buttons from './components/Buttons/Buttons.tsx';
import GameField from './components/GameField/GameField.tsx';
import FieldItem from './components/FieldItem/FieldItem.tsx';


export interface Items {
    hasItem: boolean;
    clicked: boolean;
}

function App() {
    const initialItems = () => {
        const itemPosition = Math.floor(Math.random() * 36);
        const itemsArr: Items[] = [];
        for (let i = 0; i < 36; i++) {
            if (i === itemPosition) {
                itemsArr.push({hasItem: true, clicked: false});
            } else {
                itemsArr.push({hasItem: false, clicked: false});
            }
        }
        return itemsArr;
    };

    const [items, setItems] = useState<Items[]>(initialItems);
    const [tries, setTries] = useState<number>(0);
    const [game, setGame] = useState<boolean>(true);


    const onClickReset= ()=>{
        setItems(initialItems)
        setTries(0);
        setGame(true);
    }
    return (
        <>
            <GameField children={items.map((el,index)=>{
                    return <FieldItem />
                })}/>
            <Counter count={tries}/>
            <Buttons onResetClick={onClickReset}/>

        </>
    );
}

export default App;
