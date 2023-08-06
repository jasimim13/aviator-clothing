import { Home } from "./Routes/Home/Home";
import { Navigation } from "./Routes/Navigation/Navigation";
import { Authentication } from "./Routes/Authentication/authentication";
import { Route, Routes, Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Outlet />
      Shop
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
