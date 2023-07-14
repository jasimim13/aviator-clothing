import { Home } from "./Routes/Home/Home";
import { Navigation } from "./Routes/Navigation/Navigation";
import { SignIn } from "./Routes/Sign In/SignIn";
import { Route, Routes, Outlet } from "react-router-dom";

const Shop = () =>{
  return(
    <div>
      <Outlet/>
      Shop
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
