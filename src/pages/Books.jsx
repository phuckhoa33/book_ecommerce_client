import '../styles/books.scss';
import { useBookContext } from '../context/bookContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookDependOnAuthor, getBookDependOnCategoryid } from '../store/store';

export const Books = () => {
    const navigate = useNavigate();
    const { categories, setPage, 
            pageAmount, paginationBooks, 
            page, setBooksPage, 
            books, authors, handleFilterBooks
        } = useBookContext();
    const {author, category, search} = useParams();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue1, setSelectedValue1] = useState('');
    const [categoryElements, setCategoryElements] = useState('');
    const {startPrice, setStartPrice} = useState(0);
    const {endPrice, setEndPrice} = useState(199);

    const toggleDropdown = (funcState, state) => {
        funcState(!state);
    };

    useEffect(() => {
        const handleFetchData = async() => {
            if(author !== "none" && author !== undefined){
                console.log(author);
                const {data} = await getBookDependOnAuthor(author);
                setBooksPage(data?.data);
            }
            else if(category !== "none" && category !== undefined){
                const {data} = await getBookDependOnCategoryid(category);
                setBooksPage(data?.data);
            }
            else if(search !== "none" && search !== undefined){
                const a = await books?.filter(book => book?.title?.toLowerCase()?.startsWith(search?.toLowerCase()));
                setBooksPage(a);
            }
            else {
                setBooksPage(books);
            }

        }
        handleFetchData();
    }, [author, category, search]);
    

    const handleSwitchPage = (number) => {
        setPage(number);
        if(page > pageAmount){
            setPage(pageAmount);
        }
    }


    const handleRadioChange = (event, setFunc) => {
        setFunc(event.target.value);
    };  

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        if(checked){
            setCategoryElements([...categoryElements,  e.target.value]);
        }
        else {
            setCategoryElements(categoryElements?.filter(categoryElement => categoryElement !== e.target.value));
        }
    };

    const handlePrice = (e, setFuc) => {
        setFuc(e.target.value);
    }

    return (
        <>
            <section className="product-category-page" style={{marginTop: "10vh"}}>
                <div className="container">

                    <div className="product-category-wrapper row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="category-filter-wrapper">
                        <div className="category-filter__title --lg --mobile-filter-header">
                            <span className="mr-4">Filter</span>
                            <span className="close-category ml-auto px-3">
                            <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="category-filter-wrapper__body">
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md dropdown-button" onClick={() => toggleDropdown(setIsOpen, isOpen)}>Author  <FontAwesomeIcon icon={faArrowDown}/></div>
                            {isOpen && (
                                <>
                                    {authors?.map((author, index) => (
                                        <>
                                            <label key={index}>
                                                <input
                                                    type="radio"
                                                    value={author}
                                                    checked={selectedValue === author}
                                                    onChange={e => handleRadioChange(e, setSelectedValue)}
                                                />
                                                {author}
                                            </label>
                                            <br />
                                        </>

                                    ))}
                                </>

                            )}
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md dropdown-button"  onClick={() => toggleDropdown(setIsOpen1, isOpen1)}>Category  <FontAwesomeIcon icon={faArrowDown}/></div>
                            {isOpen1 && (
                                <div className="category-filter__content">
                                    {categories?.map(category => (
                                        <div className="custom-control custom-checkbox mb-2">
                                            <input type="checkbox" value={category?.id} onChange={handleCheckboxChange} className="custom-control-input" id="cashOnDelivery"/>
                                            <label className="custom-control-label" htmlFor="cashOnDelivery">{category?.name}</label>
                                        </div>

                                    ))}
                                </div>
                            )}
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md  dropdown-button"  onClick={() => toggleDropdown(setIsOpen2, isOpen2)}>Time  <FontAwesomeIcon icon={faArrowDown}/></div>
                            {isOpen2 && (
                                <div>
                                <label>
                                  <input
                                    type="radio"
                                    value="newest"
                                    checked={selectedValue1 === 'newest'}
                                    onChange={e => handleRadioChange(e, setSelectedValue1)}
                                  />
                                    Newest
                                </label>
                                <br />
                                <br />
                                <label>
                                  <input
                                    type="radio"
                                    value="oldest"
                                    checked={selectedValue1 === 'oldest'}
                                    onChange={e => handleRadioChange(e, setSelectedValue1)}
                                  />
                                  Oldest
                                </label>
                                <br />
                              </div>

                            )}
                            </div>
                            <div className="category-filter__item-wrapper price-wrapper">
                            <div className="category-filter__title --md">Price</div>
                            <div className="category-filter__content">
                                <div className="price-filter-wrapper">
                                <div className="price-filter__item --min-price">
                                    <div className="select-input form-group">
                                    <select value={startPrice} onChange={e =>  handlePrice(e, setStartPrice)} className="form-control" id="minPrice">
                                        <option value="0">0</option>
                                        <option value="1000">1000</option>
                                        <option value="3000">3000</option>
                                        <option value="5000">5000</option>
                                        <option value="10000">10000</option>
                                        <option value="20000">20000</option>
                                        <option value="40000">40000</option>
                                        <option value="50000">50000</option>
                                        <option value="80000">80000</option>
                                        <option value="100000">100000</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="price-filter__item --max-price">
                                    <div className="select-input form-group">
                                    <select className="form-control" id="maxPrice" value={endPrice} onChange={e =>  handlePrice(e, setEndPrice)}>
                                        <option value="1000" selected="true">1000</option>
                                        <option value="10000">10000</option>
                                        <option value="20000">20000</option>
                                        <option value="40000">40000</option>
                                        <option value="60000">60000</option>
                                        <option value="80000">80000</option>
                                        <option value="100000">100000</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="price-filter__item">
                                    <div className="send-btn-icon">
                                        <FontAwesomeIcon onClick={() => handleFilterBooks(categoryElements, selectedValue, selectedValue1, [0, 30])} icon={faFilter}/>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-main-container col-12 col-md-8 col-lg-9">
                        <div className="products-item-container">
                            {paginationBooks?.map(book => (
                                <>
                                    <a className="card product-item-wrapper">
                                        <figure className="product-item-img-wrapper">
                                        <img src={book?.image} alt="image"/>
                                        </figure>
                                        <div className="product-body">
                                        <div className="product-rating mb-2">
                                            <div className="rating-holder">
                                            <div className="c-rating c-rating--big" data-rating-value="4">
                                                <button>1</button>
                                                <button>2</button>
                                                <button>3</button>
                                                <button>4</button>
                                                <button>5</button>
                                            </div>
                                            </div>
                                        </div>
                                        <p onClick={() => navigate(`/book/${book?.id}`)} className="product-name">{book?.title}
                                        </p>
                                        <h3 className="product-price">${book?.price}</h3>
                                        </div>
                                        {/* <div className="product-item-badge new">New</div> */}
                                    </a>
                                </>
                            ))}
                        </div>
                        <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li onClick={() => handleSwitchPage(page-1)} class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {pageAmount>8 ? (
                                <>
                                    <li onClick={() => handleSwitchPage(1)} class="page-item"><a class="page-link" href="#">{1}</a></li>
                                    <li onClick={() => handleSwitchPage(2)} class="page-item"><a class="page-link" href="#">{2}</a></li>
                                    <li onClick={() => handleSwitchPage(3)} class="page-item"><a class="page-link" href="#">{3}</a></li>
                                    <li className="page-item"><a href="#" className="page-link">...</a></li>
                                    <li onClick={() => handleSwitchPage(pageAmount-2)} class="page-item"><a class="page-link" href="#">{pageAmount-2}</a></li>
                                    <li onClick={() => handleSwitchPage(pageAmount-1)} class="page-item"><a class="page-link" href="#">{pageAmount-1}</a></li>
                                    <li onClick={() => handleSwitchPage(pageAmount)} class="page-item"><a class="page-link" href="#">{pageAmount}</a></li>
                                </>
                            ): (
                                <>
                                    {Array(pageAmount)?.fill(0)?.map((value, index) => (
                                        <li onClick={() => handleSwitchPage(index+1)} class="page-item"><a class="page-link" href="#">{index+1}</a></li>
        
                                    ))}
                                </>

                            )}
                            <li onClick={() => handleSwitchPage(page+1)} class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}