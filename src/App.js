import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import SignUp from './pages/signUp';


function App() {


 
  localStorage.setItem("users", JSON.stringify());
  
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/} 
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
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
