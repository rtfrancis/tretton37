function SortingComponent(props){
    console.log("props from sorting", props)

    const handleChange = e => {
        props.onChange(e.target.value)
    }

    return(
        <form>
            <label>
                Sorting by:
                <select value={props.props} onChange={handleChange}>
                    <option value="name">Name</option>
                    <option value="office">Office</option>
                </select>
            </label>
        </form>
    )
}

export default SortingComponent;