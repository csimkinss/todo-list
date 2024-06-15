import { useState } from "react";
import AddButton from "./components/AddButton";
import ListItem from "./components/ListItem";
import ListTotal from "./components/ListTotal";
import CheckedItems from "./components/CheckedItems";

import "./App.scss";

function App() {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem("list")) || [
            { task: "do the washing up", isComplete: false },
            { task: "sweep the floor", isComplete: false },
            { task: "vacuum", isComplete: false },
        ]
    );

    function handleStorage(newList) {
        setList(newList);
        localStorage.setItem("list", JSON.stringify(newList));
    }

    return (
        <div className="App">
            <ul className="list">
                {list &&
                    list.map((item, key) => (
                        <ListItem
                            key={key}
                            index={key}
                            list={list}
                            setList={handleStorage}
                            isComplete={item.isComplete}
                        >
                            {item.task}
                        </ListItem>
                    ))}
            </ul>
            <AddButton setList={handleStorage} list={list} />
            <ListTotal list={list} />
            <CheckedItems list={list} />
        </div>
    );
}

export default App;
