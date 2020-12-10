import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

import CurrentClasses from './pages/Currentclasses';
import Login from './pages/Login'
import SignUp from './pages/signUp';
import Class from './pages/Class'
import MyClasses from './pages/MyClasses'
import MyProfile from './pages/MyProfile';




function App() {


  // localStorage.clear();
  localStorage.setItem("users", JSON.stringify());
  
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/} 
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/currentclasses' component={CurrentClasses}></Route>
      <Route exact path='/Class' component={Class}></Route>
      <Route exact path='/myClasses' component={MyClasses}></Route>
      <Route exact path='/myProfile' component={MyProfile}></Route>
    </Switch>
  );
}

export default App;




// import{useSelector, useDispatch} from 'react-redux'

// import {increment} from './actions'

// function App() {
//   const  counter = useSelector(state => state.counterReducer)
//   const dispatch = useDispatch()
//   return (
//     <div >
//       <h1>Counter: {counter}</h1>

//       <button onClick={() => dispatch(increment()) }>+</button>
//       <button>-</button>
//     </div>


//   );
// }

// export default App;
