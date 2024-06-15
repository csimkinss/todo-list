const CheckedItems = (props) => {

    const { list } = { ...props };
    let totalChecked = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete) {
            totalChecked++;
        }
    }

    return <h4>Total items checked: {totalChecked}</h4>;
};

export default CheckedItems;
