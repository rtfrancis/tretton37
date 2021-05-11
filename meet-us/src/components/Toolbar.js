import ReactTooltip from 'react-tooltip';

import ToolbarStyles from "./Toolbar.module.css"

import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineOfficeBuilding, HiOutlineRefresh } from 'react-icons/hi'

function ToolBar(props){

    const selectSortOption = val => {
         props.updateSort(val);
    }
    const handleClick = val => {
        props.updateFilter(val);
    }

    return(
        <div data-testid="toolbar-main" className={ToolbarStyles.toolbar}>
            <div className={ToolbarStyles.headline}>Get to know the team</div>
            <div className={ToolbarStyles.toolContainer}>

                <div className={ToolbarStyles.sortingBar}>
                    <span>Sort by:</span>
                    
                    <div data-tip="Name" data-delay-show='1000' className={ToolbarStyles.icon}>
                        <span className={props.sort === "name" ? ToolbarStyles.selected : null}>
                            <BsFillPersonFill data-testid="name-sort" size='2em' onClick={() => selectSortOption("name")}/>
                        </span>
                    </div>

                    <div data-tip="Office" data-delay-show='1000' className={ToolbarStyles.icon}>
                        <span className={props.sort === "office" ? ToolbarStyles.selected : null}>
                            <HiOutlineOfficeBuilding data-testid="office-sort" size='2em' onClick={() => selectSortOption("office")}/>
                        </span>
                    </div> 
                </div>

                <div className={ToolbarStyles.filterBar}>
                    <span>Filter by:</span>

                    <div data-tip="Name" data-delay-show='1000' className={ToolbarStyles.icon}>
                        <span className={props.filter === "name" ? ToolbarStyles.selected : null}>
                            <BsFillPersonFill data-testid="name-filter" size='2em' onClick={() => handleClick("name")}/>
                        </span>
                    </div>

                    <div data-tip="Office" data-delay-show='1000' className={ToolbarStyles.icon}>
                        <span className={props.filter === "office" ? ToolbarStyles.selected : null}>
                            <HiOutlineOfficeBuilding data-testid="office-filter" size='2em' onClick={() => handleClick("office")}/>
                        </span>
                    </div>

                    <div data-tip="Reset Filters" data-delay-show='800' onClick={() => handleClick(0)} className={props.filter === null ? ToolbarStyles.hidden : ToolbarStyles.resetButton}>
                        <HiOutlineRefresh size="1.3em"/>
                    </div>

                </div>
            </div>
            <ReactTooltip />
        </div>
    )
}

export default ToolBar;