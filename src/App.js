import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login'


function App() {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/} 
      <Route exact path='/login' component={Login}></Route>
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
