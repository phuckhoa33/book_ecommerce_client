import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8080/api"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem("token")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
    }
    return req;
})


// Authentication 
export const login = (formValue) => API.post("/auth/login", formValue);
export const register = (formValue) => API.post("/auth/register", formValue);
export const sendEmailResetPassword = (formValue) => API.post("/auth/forgot-password", formValue);
export const resetPassword = (formValue) => API.put("/auth/reset-password", formValue);
export const getUser = () => API.get("/user/get-user");

// BIlling
export const createBill = (formValue) => API.post("/bill", formValue);
export const getBillByUserId = (userid) => API.get(`/bill/${userid}`);
export const getPayment = (userid, billid) => API.get(`/bill/payment/${userid}/${billid}`);

// Category
export const getCategories = () => API.get("/category");

// Discount
export const getDiscounts = () => API.get("/discount");

// Book
export const getBook = (bookid) => API.get(`/book/${bookid}`);
export const getBooks = () => API.get("/book");
export const getBookDependOnCategoryid = (categoryid) => API.get(`/book/category/${categoryid}`);
export const getBookDependOnAuthor = (author) => API.get(`/book/author/${author}`);
export const updateQuantity = (formValue) => API.patch(`/book/quantity`, formValue);

// User
export const getUserById = (userid) => API.get(`/user/${userid}`);
export const getUserByEmail = (email) => API.get(`/user/email/${email}`);
export const updateUser = (formValue) => API.put('/user', formValue);