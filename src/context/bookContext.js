import { createContext, useContext, useEffect, useState } from "react";
import { getBooks, getCategories } from "../store/store";

const BookContext = createContext();

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [bookCategories, setBookCategories] = useState([]);
    const [paginationBooks, setPaginationBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [pageAmount, setPageAmount] = useState(0);

    useEffect(() => {
        const handleFetchDataFromServer = async() => {
            const getBooksProcess = await getBooks();
            const getCategoriesAndBookCategoriesProcess = await getCategories();
            Promise.all([getBooksProcess, getCategoriesAndBookCategoriesProcess]);
            setBooks(getBooksProcess.data.data);
            setCategories(getCategoriesAndBookCategoriesProcess.data.data.categories);
            setBookCategories(getCategoriesAndBookCategoriesProcess.data.data.bookCategories);
        }
        handleFetchDataFromServer();

    }, []);

    useEffect(() => {
        setPageAmount(Math.ceil(books.length/8));
        if(page<=0){
            setPage(1);
            return;
        }
        else if(page > pageAmount){
            setPage(pageAmount);
            return;
        }
        else {
            const endIndex = page*8;
            setPaginationBooks(books.slice(endIndex-8, endIndex));
        }
    }, [page, books])




    return (
        <BookContext.Provider value={{
            books,
            pageAmount,
            categories,
            bookCategories,
            paginationBooks,
            page,
            setPage,

        }}>

            {children}
        </BookContext.Provider>
    )
}

export const useBookContext = () => useContext(BookContext);