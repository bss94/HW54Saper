import './App.css';
import {useState} from 'react';
import Counter from './components/Counter/Counter.tsx';
import Buttons from './components/Buttons/Buttons.tsx';
import GameField from './components/GameField/GameField.tsx';
import FieldItem from './components/FieldItem/FieldItem.tsx';
import EndGame from './components/EndGame/EndGame.tsx';


interface Items {
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

    const onItemClick = (position: number) => {
        if (!items[position].clicked && game) {
            setItems(prevState => {
                return prevState.map((item, index): Items => {
                    if (index === position) {
                        return {...item, clicked: !item.clicked};
                    } else {
                        return {...item};
                    }
                });
            });
            setTries(prevState => {
                return prevState + 1;
            });
            if (items[position].hasItem) {
                setGame(!game);
            }
        }
    };
    const onClickReset = () => {
        setItems(initialItems);
        setTries(0);
        setGame(true);
    };
    return (
        <>
            <GameField children={items.map((el, index) => {
                return <FieldItem hasItem={el.hasItem} clickOnItem={() => onItemClick(index)} clicked={el.clicked}
                                  index={index} key={index}/>;
            })}/>
            <EndGame game={game}/>
            <Counter count={tries}/>
            <Buttons onResetClick={onClickReset}/>

        </>
    );
}

export default App;
