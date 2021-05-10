
import FilterStyles from "./FilterBar.module.css";

function FilteringComponent(props){

    const handleChange = e => {
        props.updateFilter(e.target.value)
    }

    const updateOffice = e => {
        props.selectOffice(e.target.value);
    }

    const handleNameFilter = e => {
        props.nameFilter(e.target.value);
    }

    let officeFilter = props.props === "office" ? FilterStyles.visible : FilterStyles.hidden

    let nameFilter = props.props === "name" ? FilterStyles.visible : FilterStyles.hidden

    return(
        <div>
            <form>
                <label>
                    Filter by:
                    <select value={props.props} onChange={handleChange}>
                        <option value="none" defaultValue disabled>Select</option>
                        <option value="name">Name</option>
                        <option value="office">Office</option>
                    </select>
                </label>
            </form>

            <form className={officeFilter}>
                <select value={props.office} onChange={updateOffice}>
                    <option value="none" defaultValue disabled>Select</option>
                    <option value="Borlänge">Borlänge</option>
                    <option value="Helsingborg">Helsingborg</option>
                    <option value="Ljubljana">Llubljana</option>
                    <option value="Lund">Lund</option>
                    <option value="Stockholm">Stockholm</option>
                </select>
            </form>
            <form className={nameFilter}>
                <select value={props.name} onChange={handleNameFilter}>
                    <option value="none" defaultValue disabled>Select</option>
                    <option value={0}>A-G</option>
                    <option value={1}>H-M</option>
                    <option value={2}>N-T</option>
                    <option value={3}>U-Ž</option>
                    
                </select>
            </form>
            <button onClick={handleChange} value={0}>Reset Filters</button>
        </div>
    )
}

export default FilteringComponent;