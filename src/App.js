import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Order from "./pages/order/Order";
import Employee from "./pages/employee/Employee";
import EmployeeEdit from "./pages/employeeEdit/EmployeeEdit";
import Customer from "./pages/customer/Customer";
import Rating from "./pages/rating/Rating";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element ={<Home />}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element ={<Product/>} />
          <Route path="/user" element ={<User/>} />
          <Route path="/newProduct" element ={<NewProduct/>} />
          <Route path="/productList" element ={<ProductList/>} />
          <Route path="/order" element ={<Order/>} />
          <Route path="/employee" element ={<Employee/>} />
          <Route path="/employeeEdit" element ={<EmployeeEdit/>} />
        
          <Route path="/customer" element ={<Customer/>} />
          <Route path="/rating" element ={<Rating/>} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;