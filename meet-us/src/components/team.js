import React, { useState, useEffect } from 'react';
import EmployeeCard from "./Card"
import SortingComponent from "./SortingBar"
import FilteringComponent from "./FilterBar";
import TeamStyles from "./Team.module.css";


function TeamPage() {
    
    const [ employees, setEmployees ] = useState([]);
    const [ filteredEmployees, setFilteredEmployees ] = useState(employees);
    const [ sort, setSort ] = useState("name");
    const [ filter, setFilter ] = useState('none');
    const [ office, setOffice ] = useState("none")

    const updateSort = data => {
      setSort(data)
      sortCards(data);
      // console.log("Form>", data)
    }

    const updateFilter = data => {
      // console.log("DAAAAATA", data)
      if (data == 0) {
        setFilteredEmployees([])
        setFilter("none");
      } else {
        setFilter(data);
      }
      // console.log("Filter form", filteredEmployees)
    }

    const selectOffice = data => {
      setOffice(data);
      setFilteredEmployees(employees.filter(each => each.office === data));
      // console.log(filteredEmployees)
    }

    const sortCards = (option) => {
      employees.sort(function(x,y){
        let a = option === "office" ? x.office.toUpperCase() : x.name.toUpperCase()
        let b = option === "office" ? y.office.toUpperCase() : y.name.toUpperCase()
        return a == b ? 0 : a > b ? 1 : -1;
      })
    }

    const filterEmployeesByName = (option) => {
      let letterGroups = [["A", "B", "C", "D", "E", "F", "G"], ["H", "I", "J", "K", "L", "M"], ["N", "O", "P", "Q", "R", "S", "T"], ["U", "V", "W", "X", "Y", "Z", "Å", "İ", "Ž"]];
      let arr = letterGroups[option]
      let nameFilter = [];
      for(var i = 0; i < employees.length; i++){
        for(var j = 0; j < arr.length; j++){
          if(employees[i].name.charAt(0) === arr[j]){
            nameFilter.push(employees[i])
          }
        }
      }
      // console.log("NAMESSSS!", nameFilter)
      setFilteredEmployees(nameFilter);
    }

    useEffect(() => {
        fetch('/api/ninjas').then(res => res.json()).then(data => setEmployees(data))
    }, [])
  

  return (
    <div>
      <h2>Meet Us</h2>
     
      <div>
        <SortingComponent props={sort} onChange={(e) => { updateSort(e)}}/>

        <FilteringComponent props={filter} office={office} updateFilter={ (e) => { updateFilter(e) }} selectOffice={ (e) => { selectOffice(e) }} nameFilter={ (e) => { filterEmployeesByName(e) }}/>
      </div>

      <div className={TeamStyles.container}>
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
