import { createContext, useContext, useEffect, useState } from "react";
import { getBookDependOnAuthor, getBookDependOnCategoryid, getBooks, getCategories, getDiscounts } from "../store/store";
const BookContext = createContext();

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [bookCategories, setBookCategories] = useState([]);
    const [paginationBooks, setPaginationBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [pageAmount, setPageAmount] = useState(0);
    const [booksPage, setBooksPage] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const [globalDiscount, setGlobalDiscount] = useState();
    const [intervalDiscount, setIntervalDiscount] = useState([]);

    useEffect(() => {
        const handleFetchDataFromServer = async() => {
            const getBooksProcess = await getBooks();
            const getCategoriesAndBookCategoriesProcess = await getCategories();
            const getDiscountsProcess = await getDiscounts();
            Promise.all([getBooksProcess, getCategoriesAndBookCategoriesProcess, getDiscountsProcess]);
            setDiscounts(getDiscountsProcess.data.data);
            setBooks(getBooksProcess.data.data);
            setCategories(getCategoriesAndBookCategoriesProcess.data.data.categories);
            setBookCategories(getCategoriesAndBookCategoriesProcess.data.data.bookCategories);

            const uniqueAuthors = [...new Set(getBooksProcess?.data?.data?.map(item => item.author))];

            // Tạo mảng mới với các đối tượng có thuộc tính "author" duy nhất
            const uniqueAuthorObjects = uniqueAuthors.map(author => ({
                author: author,
            }));

            const objects = uniqueAuthorObjects.map(item => item.author);
            setGlobalDiscount(() => {
                const globalDiscount = discounts.filter(discount => discount?.limit === 'global');
                const discountTotal = globalDiscount.reduce(function(accumulator, currentItem) {
                    return accumulator + currentItem.percent;
                }, 0);

                return discountTotal;
            });

            setAuthors(objects);
        }
        
        handleFetchDataFromServer();
        
    }, []);

    useEffect(() => {
        setIntervalDiscount(() => {
            return discounts?.filter(discount => discount?.limit !== 'global');
        });
    }, [discounts])

    useEffect(() => {
        setPageAmount(Math.ceil(booksPage?.length/8));
        if(page<=0){
            setPage(1);
            return;
        }
        else {
            const endIndex = page*8;
            setPaginationBooks(booksPage?.slice(endIndex-8, endIndex));
        }
        return () => {};
    }, [booksPage, page]);

    const handleFilterBooks = (categoryElemetnsCondition, authorCondition, dateCondtion, priceCondition) => {
        let sameBooks = books;
        if(categoryElemetnsCondition?.length >0){
            const sameBookCategories = bookCategories?.filter(bookCategory => categoryElemetnsCondition.includes(""+bookCategory?.categoryid));
            sameBooks = books?.filter(book => sameBookCategories?.map(item => item.bookid).includes(book?.id));
            
        }
        let authorBooks = sameBooks;
        if(authorCondition !== ''){
            authorBooks = sameBooks.filter(book => book?.author === authorCondition);
        }
        let dateBooks = authorBooks;
        if(dateCondtion === 'oldest'){
            dateBooks = [...authorBooks].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }
        else if(dateCondtion === "newest"){
            dateBooks = [...authorBooks].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        }
        let priceBooks = dateBooks;
        // if(priceCondition[0] !== 0 && priceCondition[1] !== 0){
        //     console.log(priceCondition);
        //     priceBooks = dateBooks?.filter(book => book.price > priceCondition[0] && book.price < priceCondition[1]);
        // }

        setBooksPage(priceBooks);
    }




    return (
        <BookContext.Provider value={{
            books,
            pageAmount,
            categories,
            bookCategories,
            paginationBooks,
            page,
            authors,
            discounts,
            globalDiscount,
            intervalDiscount,
            setPage,
            setBooksPage,
            handleFilterBooks

        }}>

            {children}
        </BookContext.Provider>
    )
}

export const useBookContext = () => useContext(BookContext);