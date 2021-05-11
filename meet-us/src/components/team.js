import React, { useState, useEffect } from 'react';
import EmployeeCard from "./Card"
import Toolbar from "./Toolbar"
import TeamStyles from "./Team.module.css";

import { sortCards, filterByName } from "../functions";

function TeamPage() {
    
    const [ employees, setEmployees ] = useState([]);
    const [ filteredEmployees, setFilteredEmployees ] = useState(employees);
    const [ sort, setSort ] = useState("name");
    const [ filter, setFilter ] = useState(null);
    const [ office, setOffice ] = useState(null);
    const [ nameGroup, setNameGroup ] = useState(null);

    // Functions for sort option //
    const updateSort = data => {
      setFilteredEmployees(employees)
      if(filter !== null){
        setFilter(null);
        setOffice(null);
        setNameGroup(null);
        setSort(data);
        sortCards(data, employees);
      } else {
        setSort(data);
        sortCards(data, employees);
      }
    }

    // Functions for updating filter options //
    const updateFilter = data => {
      if (data === 0) {
        setFilteredEmployees(employees);
        setFilter(null);
        setNameGroup(null);
        setOffice(null);
      } else {
        setSort(null);
        setFilter(data);
      }
    }

    const selectOffice = data => {
      sortCards("name", employees);
      setOffice(data);
      setFilter("office");
      setNameGroup(null);
      setFilteredEmployees(employees.filter(each => each.office === data));
    }

    const filterEmployeesByName = (option) => {
      updateFilter("name");
      sortCards("name", employees);
      setFilteredEmployees(employees);
      setNameGroup(option);
      setFilteredEmployees(filterByName(option, employees));
    }
    
    useEffect(() => {
        fetch('/api/ninjas').then(res => res.json()).then(data => {setEmployees(data); setFilteredEmployees(data)});
    }, [])
  

  return (
    <div data-testid="teamContainer">
      
      <Toolbar filter={filter} sort={sort} updateSort={(val) => { updateSort(val)}} updateFilter={ (val) => { updateFilter(val) }}/>

      <div className={TeamStyles.spaceHolder}>
          {filter === "office" ? <div className={TeamStyles.officesContainer}>
            <div className={office === "Borlänge" ? TeamStyles.selected : null} onClick={() => selectOffice("Borlänge")}>Borlänge</div>
            <div className={office === "Helsingborg" ? TeamStyles.selected : null} onClick={() => selectOffice("Helsingborg")}>Helsingborg</div>
            <div className={office === "Ljubljana" ? TeamStyles.selected : null} onClick={() => selectOffice("Ljubljana")}>Ljubljana</div>
            <div className={office === "Lund" ? TeamStyles.selected : null} onClick={() => selectOffice("Lund")}>Lund</div>
            <div className={office === "Stockholm" ? TeamStyles.selected : null} onClick={() => selectOffice("Stockholm")}>Stockholm</div>
          </div> : null}

          {filter === "name" ? <div className={TeamStyles.namesContainer}>
            <div className={nameGroup === 0 ? TeamStyles.selected : null} onClick={() => filterEmployeesByName(0)}>A - G</div>
            <div className={nameGroup === 1 ? TeamStyles.selected : null} onClick={() => filterEmployeesByName(1)}>H - M</div>
            <div className={nameGroup === 2 ? TeamStyles.selected : null} onClick={() => filterEmployeesByName(2)}>N - T</div>
            <div className={nameGroup === 3 ? TeamStyles.selected : null} onClick={() => filterEmployeesByName(3)}>U - Z ...</div>
          </div> : null}
      </div>

      <div data-testid="teamCards" className={TeamStyles.employeeContainer}>
        {filteredEmployees.length > 0 ? filteredEmployees.map(item => (
            <EmployeeCard key={item.name} props={item}/>
        )) : employees.map(item => (
            <EmployeeCard key={item.name} props={item}/>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
