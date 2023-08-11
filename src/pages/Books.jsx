import '../styles/books.scss';
import { useBookContext } from '../context/bookContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Books = () => {
    const {category, author} = useParams();
    const navigate = useNavigate();
    const {books, categories, setPage, pageAmount, paginationBooks, page} = useBookContext();
    const [filteredBooks, setFilterBooks] = useState(books);
    

    useEffect(() => {
        
    }, [])

    const handleSwitchPage = (number) => {
        setPage(number);
    }


    return (
        <>
            <section className="product-category-page" style={{marginTop: "10vh"}}>
                <div className="container">
                    <div className="products-filter-wrapper mb-4">
                    <button className="btn link-as-btn filter-toggle-btn">
                        <i className="fas fa-filter mr-3"></i> Filter
                    </button>
                    </div>

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
                            <div className="category-filter__title --md">Author</div>
                            <div className="category-filter__content mb-4">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" name="example1"/>
                                <label className="custom-control-label" for="customCheck1">Nature's Essence</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" name="example2"/>
                                <label className="custom-control-label" for="customCheck2">Enchanteur</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" name="example3"/>
                                <label className="custom-control-label" for="customCheck3">Joy</label>
                                </div>
                            </div>
                            <a className="link-as-btn">View More</a>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Category</div>
                            <div className="category-filter__content">
                                {categories?.map(category => (
                                    <div className="custom-control custom-checkbox mb-2">
                                        <input type="checkbox" className="custom-control-input" id="cashOnDelivery" name="cashOnDelivery"/>
                                        <label className="custom-control-label" for="cashOnDelivery">{category?.name}</label>
                                    </div>

                                ))}
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Time</div>
                            <div className="category-filter__content">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="kathmanduLocation" name="kathmanduLocation"/>
                                <label className="custom-control-label" for="kathmanduLocation">Newest</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="kathmanduLocation" name="kathmanduLocation"/>
                                <label className="custom-control-label" for="kathmanduLocation">Oldest</label>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper price-wrapper">
                            <div className="category-filter__title --md">Price</div>
                            <div className="category-filter__content">
                                <div className="price-filter-wrapper">
                                <div className="price-filter__item --min-price">
                                    <div className="select-input form-group">
                                    <select className="form-control" id="minPrice">
                                        <option value="0" selected="true">0</option>
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
                                    <select className="form-control" id="maxPrice">
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
                                        <FontAwesomeIcon icon={faFilter}/>
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
                                    {Array(pageAmount).fill(0).map((value, index) => (
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