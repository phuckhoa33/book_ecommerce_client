import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { PageLayout } from './layouts/PageLayout';
import { Error404 } from './pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Book } from './pages/Book';
import { Books } from './pages/Books';
import { Cart } from './pages/Cart';
import Profile from './pages/Profile';
import { Authentication } from './pages/Authentication';
import { ResetPassword } from './pages/SendEmailResetPassword';
import ResetPasswordForm from './pages/CreateNewPassword';
import AboutUs from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Payment } from './pages/PaymentPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookProvider } from './context/bookContext';
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
          <BookProvider>
            <UserProvider>
              <CartProvider>

                <Routes>
                  <Route element={<PageLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/book/:bookId' element={<Book/>}/>
                    <Route path='/books/:category/:author/:search' element={<Books/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/profile/:email' element={<Profile/>}/>
                    <Route path='/forgot-password' element={<ResetPassword/>}/>
                    <Route path='/auth' element={<Authentication/>}/>
                    <Route path='/reset-password/:token' element={<ResetPasswordForm/>}/>
                    <Route path='/aboutUs' element={<AboutUs/>}/>
                    <Route path='/contact' element={<Contact/>}/>

                  </Route>
                  <Route path='/payment/:sessionId/:userId' element={<Payment/>}/>
                  <Route path='*' element={<Error404/>}/>
                </Routes>
              </CartProvider>

            </UserProvider>
          </BookProvider>
      </Router>
    </div>

    
  );
}

export default App;
