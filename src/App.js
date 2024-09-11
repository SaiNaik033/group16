import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import {createBrowserRouter} from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/Signup',
    element:<Signup/>
  }
])
function App() {
  return (
    <>
    <Home/>
    </>
  );
}
export {router}
export default App;
