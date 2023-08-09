import { useEffect } from 'react';
import '../styles/paymentHistory.scss';
import $ from 'jquery';

export const PaymentHistory = () => {
    useEffect(() => {}, [])


    return (
        <>
            <div class="my-wallet">
                <div class="loading"></div>
                
                <div class="add-account-modal">
                    <div class="overlay"></div>
                    
                    <div class="account new-account">

                        <div class="account-card-type is-visa is-selected" data-card-type="is-visa"></div>
                        
                        <div class="account-card-type is-mastercard" data-card-type="is-mastercard"></div>
                        
                        <div class="account-card-type is-amex" data-card-type="is-amex"></div>
                        <input type="text" class="account-number" placeholder="**** **** **** ****"  value="" />
                        <input type="text" class="account-expiration" placeholder="Valid Thru: " value="" />
                        
                        <button>+ Add Account</button>
                    </div>
                    
                </div>
                
                <div class="my-wallet-sidebar">
                    
                    <h1 class="my-wallet-title">My Wallet <div class="add-account">&#43;</div></h1>
                    <div class="active-account"></div>
                    
                    <div class="accounts-container">
                        
                        <div class="account" data-account="6337">
                            <div class="account-card-type is-visa"></div>
                            <div class="account-number">**** **** **** 6337</div>
                            <div class="account-expiration">Valid Thru: 01/19</div>
                        </div>

                        <div class="account" data-account="2558">
                            <div class="account-card-type is-amex"></div>
                            <div class="account-number">**** **** **** 2558</div>
                            <div class="account-expiration">Valid Thru: 01/19</div>
                        </div>
                        
                        <div class="account" data-account="8253">
                            <div class="account-card-type is-mastercard"></div>
                            <div class="account-number">**** **** **** 8253</div>
                            <div class="account-expiration">Valid Thru: 01/19</div>
                        </div>
                        
                    </div>
                
                </div>
                
                <div class="account-details-container">
                    <div class="transaction-history-placeholder">Choose an Account</div>
                    
                    <div class="account-details" data-account="6337">
                        
                        <div class="account-balance">
                            Current Balance
                            <div class="value-unit">
                                $543.
                                <sup class="value-subunit">27</sup>
                            </div>
                        </div>
                        
                        <div class="transaction-history">
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Amazon.com</div>
                                    <div class="transaction-date">Online Retailer - Jan. 19, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $85.
                                        <sup class="value-subunit">38</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="credit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Payment - Thank You!</div>
                                    <div class="transaction-date">Payment - Jan. 18, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $1365.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Netflix Subscription</div>
                                    <div class="transaction-date">Subscription Services- Jan. 15, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $9.
                                        <sup class="value-subunit">99</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">The Diamond</div>
                                    <div class="transaction-date">Food & Drink- Jan. 15, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $55.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Target</div>
                                    <div class="transaction-date">Retail - Jan. 14, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $23.
                                        <sup class="value-subunit">62</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">RV Cafe</div>
                                    <div class="transaction-date">Food & Drink - Jan. 12, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $3.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="credit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Payment - Thank You!</div>
                                    <div class="transaction-date">Payment - Jan. 01, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $500.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div class="account-details" data-account="2558">
                        
                        <div class="account-balance">
                            Current Balance
                            <div class="value-unit">
                                $152.
                                <sup class="value-subunit">34</sup>
                            </div>
                        </div>
                        
                        <div class="transaction-history">
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Amazon.com</div>
                                    <div class="transaction-date">Online Retailer  - Dec. 19, 2015</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $152.
                                        <sup class="value-subunit">34</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="credit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">New Account</div>
                                    <div class="transaction-date">New Account  - July 12, 2015</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $0.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div class="account-details" data-account="8253">
                        
                        <div class="account-balance">
                            Current Balance
                            <div class="value-unit">
                                $22.
                                <sup class="value-subunit">98</sup>
                            </div>
                        </div>
                        
                        <div class="transaction-history">
                            
                            <div class="transaction" data-transaction-type="credit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Payment - Thank You!</div>
                                    <div class="transaction-date">Payment - Jan. 18, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $274.
                                        <sup class="value-subunit">35</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Amazon.com</div>
                                    <div class="transaction-date">Online Retailer - Jan. 19, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $85.
                                        <sup class="value-subunit">38</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Netflix Subscription</div>
                                    <div class="transaction-date">Subscription Services- Jan. 15, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $9.
                                        <sup class="value-subunit">99</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">The Diamond</div>
                                    <div class="transaction-date">Food & Drink- Jan. 15, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $55.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Target</div>
                                    <div class="transaction-date">Retail - Jan. 14, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $23.
                                        <sup class="value-subunit">62</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="debit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">RV Cafe</div>
                                    <div class="transaction-date">Food & Drink - Jan. 12, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $3.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="transaction" data-transaction-type="credit">
                                <div class="transaction-details">
                                    <div class="transaction-merchant">Payment - Thank You!</div>
                                    <div class="transaction-date">Payment - Jan. 01, 2016</div>
                                </div>
                                <div class="transaction-amount">
                                    <div class="value-unit">
                                        $500.
                                        <sup class="value-subunit">00</sup>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}