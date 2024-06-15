const ListTotal = (props) => {

    const { list } = { ...props };

    let temp = list.length;

    return <h4>Total items on list: {temp}</h4>
}

export default ListTotal;
