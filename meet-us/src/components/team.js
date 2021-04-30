import React, { useState, useEffect } from 'react';

function Team() {
    
    const [ state, setState ] = useState([]);

    useEffect(() => {
      
        fetch('/api/ninjas').then(res => res.json()).then(data => setState(data))
       
    })
    
  return (
    <div>
      <h2>Team</h2>
      {/* testing fetched data from scraper: */}
      {state.map(item => (
          <li key={item.name}>{item.name}: {item.full.firstName} ///// {item.full.secondName ? item.full.secondName: null }  /////// {item.full.lastName}</li>
      ))}
    </div>
  );
}

export default Team;
