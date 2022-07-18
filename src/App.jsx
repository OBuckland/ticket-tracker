import React from 'react';

import styles from './App.module.scss';
// import Counter from './components/Counter';
// import EmployeeDetails from './components/EmployeeDetails';
import EmployeeCard from './components/EmployeeCard';
import team from "./data/team";


const App = () => {

  const getEmployeeCard = (team) => (
    <div className={styles.card} key={team.id}> 
    <EmployeeCard team={team}/>
    </div>
  )

  return (
<>
    <div>
    {team.map(getEmployeeCard)}
    </div>

    {/* <div>
      <EmployeeDetails />
    </div> 

    <div>
      <Counter />
    </div> */}
    </>
    // <section className='card'>
    //       <div className='employee deets'>
    //           <p>name</p>
    //           <p>role</p>
    //       </div>
    //       <div className='counter-tracker'>
    //           <p>Counter</p>
    //           <p>Number of tickets</p>
    //           <p>-</p>
    //           <p>+</p>
    //       </div>
    // </section>

  );
}

export default App;

// 1. Change title in public/index.html
// 2. Rename src/App.js => App.jsx
// 3. Clear out code from return in App.jsx
// 4. Clear out code from App.css
// 5. Add global reset to index.css
// 6. Install sass
// 7. Rename App.css => App.module.scss & change import 