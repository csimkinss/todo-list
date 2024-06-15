const AddButton = (props) => {
    const { setList, list } = { ...props };

    function handleOnClick(e) {
        if (e.key === 'Enter') {
            const temp = [...list];
            temp.push({task: e.target.value, isComplete: false});
            setList(temp);
            e.target.value = "";
        }
    }

    return <input className="add-item" type="text" placeholder="Add item" onKeyDown={ (e)=>{handleOnClick(e)} }/>;
};

export default AddButton;
