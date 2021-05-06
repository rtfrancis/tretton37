import React, { useState, useEffect } from 'react';
import EmployeeCard from "./Card"
import TeamStyles from "./Team.module.css";


function TeamPage() {
    
    const [ state, setState ] = useState([]);

    useEffect(() => {
      
        fetch('/api/ninjas').then(res => res.json()).then(data => setState(data))
       
    }, [])
    
  return (
    <div>
      <h2>Meet Us</h2>
      {/* testing fetched data from scraper: */}
      <h2>Some sort of sorting bar</h2>
      <div className={TeamStyles.container}>
        {state.map(item => (
            // <li key={item.name}>{item.name}: {item.full.firstName} ///// {item.full.secondName ? item.full.secondName: null }  /////// {item.full.lastName}</li>
            <EmployeeCard key={item.name} props={item}/>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
