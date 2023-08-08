import '../styles/books.scss';

export const Books = () => {
    return (
        <>
            <section className="product-category-page">
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
                            <div className="category-filter__title --md">Brand</div>
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
                            <div className="category-filter__title --md">Service</div>
                            <div className="category-filter__content">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="cashOnDelivery" name="cashOnDelivery"/>
                                <label className="custom-control-label" for="cashOnDelivery">Cash On Delivery</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="freeShipping" name="freeShipping"/>
                                <label className="custom-control-label" for="freeShipping">Free Shipping</label>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Location</div>
                            <div className="category-filter__content">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="kathmanduLocation" name="kathmanduLocation"/>
                                <label className="custom-control-label" for="kathmanduLocation">Kathmandu</label>
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
                                    <i className="fas fa-paper-plane"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Warranty Type</div>
                            <div className="category-filter__content">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="noWarranty" name="noWarranty"/>
                                <label className="custom-control-label" for="noWarranty">No Warranty</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="sellerWarranty" name="sellerWarranty"/>
                                <label className="custom-control-label" for="sellerWarranty">Seller Warranty</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="originalProduct" name="originalProduct"/>
                                <label className="custom-control-label" for="originalProduct">100 % original product</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="brandWarranty" name="brandWarranty"/>
                                <label className="custom-control-label" for="brandWarranty">Brand Warranty</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="localSellerWarranty" name="localSellerWarranty"/>
                                <label className="custom-control-label" for="localSellerWarranty">Local seller warranty</label>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Color Family</div>
                            <div className="category-filter__content">
                                <div className="color-family-checkbox-list">
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="Teal" name="Teal"/>
                                    <label className="custom-control-label" for="Teal">
                                    <i style={{color: "teal"}} className="fas fa-circle mr-3"></i>Teal</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="Maroon" name="Maroon"/>
                                    <label className="custom-control-label" for="Maroon">
                                    <i style={{color: "Maroon"}} className="fas fa-circle mr-3"></i>Maroon</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="Red" name="Red"/>
                                    <label className="custom-control-label" for="Red">
                                    <i style={{color: "Red"}} className="fas fa-circle mr-3"></i>Red</label>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Warranty Period</div>
                            <div className="category-filter__content">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="oneYear" name="oneYear"/>
                                <label className="custom-control-label" for="oneYear">1</label>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Pack Type</div>
                            <div className="category-filter__content">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="singleItemPackType" name="singleItemPackType"/>
                                <label className="custom-control-label" for="singleItemPackType">Single Item</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="multiItemPackType" name="multiItemPackType"/>
                                <label className="custom-control-label" for="multiItemPackType">Multi Item</label>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper">
                            <div className="category-filter__title --md">Travel Size</div>
                            <div className="category-filter__content">
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="regularTravelSize" name="regularTravelSize"/>
                                <label className="custom-control-label" for="regularTravelSize">Regular size</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="travelTravelSize" name="travelTravelSize"/>
                                <label className="custom-control-label" for="travelTravelSize">Travel size</label>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper size-standard-wrapper">
                            <div className="category-filter__title --md">Size</div>
                            <div className="category-filter__content">
                                <div className="select-input form-group">
                                <select className="form-control" id="sizeType">
                                    <option value="0" selected="true">EU</option>
                                    <option value="uk">UK</option>
                                    <option value="usa">USA</option>
                                </select>
                                </div>
                                <div className="size-standard-checkbox-list">
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="22" name="22"/>
                                    <label className="custom-control-label" for="22">22</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="23" name="23"/>
                                    <label className="custom-control-label" for="23">23</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="24" name="24"/>
                                    <label className="custom-control-label" for="24">24</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="25" name="25"/>
                                    <label className="custom-control-label" for="25">25</label>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="category-filter__item-wrapper size-type-wrapper">
                            <div className="category-filter__title --md">Size</div>
                            <div className="category-filter__content">
                                <div className="size-type-checkbox-list">
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="small" name="small"/>
                                    <label className="custom-control-label" for="small">S</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="medium" name="medium"/>
                                    <label className="custom-control-label" for="medium">M</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="large" name="large"/>
                                    <label className="custom-control-label" for="large">L</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="xl" name="xl"/>
                                    <label className="custom-control-label" for="xl">XL</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="xxl" name="xxl"/>
                                    <label className="custom-control-label" for="xxl">XXL</label>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="product-main-container col-12 col-md-8 col-lg-9">
                        <div className="products-item-container">
                        <a className="card product-item-wrapper">
                            <figure className="product-item-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="image"/>
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
                            <p className="product-name">Nike Shoes
                            </p>
                            <h3 className="product-price">Rs. 3,400</h3>
                            </div>
                            <div className="product-item-badge new">New</div>
                        </a><a className="card product-item-wrapper">
                            <figure className="product-item-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="image"/>
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
                            <p className="product-name">Nike Shoes
                            </p>
                            <h3 className="product-price">Rs. 3,400</h3>
                            </div>
                            <div className="product-item-badge new">New</div>
                        </a><a className="card product-item-wrapper">
                            <figure className="product-item-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="image"/>
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
                            <p className="product-name">Nike Shoes
                            </p>
                            <h3 className="product-price">Rs. 3,400</h3>
                            </div>
                            <div className="product-item-badge new">New</div>
                        </a><a className="card product-item-wrapper">
                            <figure className="product-item-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="image"/>
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
                            <p className="product-name">Nike Shoes
                            </p>
                            <h3 className="product-price">Rs. 3,400</h3>
                            </div>
                            <div className="product-item-badge new">New</div>
                        </a><a className="card product-item-wrapper">
                            <figure className="product-item-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="image"/>
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
                            <p className="product-name">Nike Shoes
                            </p>
                            <h3 className="product-price">Rs. 3,400</h3>
                            </div>
                            <div className="product-item-badge new">New</div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}