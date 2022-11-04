import { useState } from 'react';

import './App.css';
import CardList from './Card/CardList';
import {republican_candidates,
        democrate_candidates, 
        libertarian_candidates} from './Card/candidates'
import Searchbox from './Search/Searchbox';
import React from 'react';


// todo
// [ ] - add state for searchbox


function App() {
    const [searchfield, setSearchfield] = useState("");
    // const [candidates, setCandidates] = useState(candidates)
  
  const onsearchchange = (e) => {
    console.log(e.target.value);
    // todo - filter candidates
    // let filteredCandidates = candidates.filter(c => {
    //  return c.name.toLowerCase().includes(searchfield.toLowerCase());
    // });

  }

  return (
    <div className="App">
      <div class="heading-img">
        <img src="../imgs/flag-bg.jpg" alt="American Flag Background" />
      </div>
      <div class="heading">
      <h1> 2022 Midterm Elections - Mississippi</h1>
      <h3><em>Candidates for the U.S. House of Representatives</em></h3>
      <p>Voting Info and Registration:<br /> <a href="www.sos.ms.gov">Y'all Vote</a></p>
      </div>

      <Searchbox searchChange={onsearchchange} />
 
      <div class="republicans">
        <h3>Republican</h3>
        <CardList candidates={republican_candidates} party={"republican"} />
      </div>
      <div class="democrats">
        <h3>Democrat</h3>
        <CardList candidates={democrate_candidates} party={"democrate"} />
      </div>
      <div class="libertarians">
        <h3>Libertarian</h3>
        <CardList candidates={libertarian_candidates} party={"libertarian"} />
      </div>
      
    </div>
  );
}

export default App;
