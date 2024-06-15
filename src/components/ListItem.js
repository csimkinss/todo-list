const ListItem = (props) => {
    const { index, list, setList, isComplete } = { ...props }

    const handleClick = () => {
        console.log("test");
        let temp = [...list];
        temp[index].isComplete = !isComplete;
        console.log(temp);
        setList(temp);
        console.log(list);
    }

    const handleDelete = () => {
        let temp = [...list];
        temp.splice(index, 1);
        setList(temp);
    }

    return (
        <li className="list-item">
            <label onClick={handleClick}>
                <input className="tick-box" type="checkbox" defaultChecked={isComplete}/>
                <span className="task">{props.children}</span>
            </label>
            <span className="complete-by"><em>Complete by: </em></span>
            <input type="date" className="complete-date"></input>
            <button className="remove-item" onClick={handleDelete}>&times;</button>
        </li>
    );
};

export default ListItem;
