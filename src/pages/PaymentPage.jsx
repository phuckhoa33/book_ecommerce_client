import '../styles/payment.css'

export const Payment = () => {
    return (
        <div class="wapper">
		<section class="sidebar-section">
			<div class="paysam">
				<h2>payment summary</h2>
				<ul>
					<li>
						<em>Amount</em>
						<span>$8.99 USD</span>
					</li>	
					<li>
						<em>Date</em>
						<span>May 23rd</span>
					</li>
					<li>
						<em>Issuer</em>
						<span>Miraz</span>
					</li>
					<li>
						<em>Invoice Number</em>
						<span>AEZ564K458</span>
					</li>
				</ul>
			</div>
		</section>
		<section class="container-section">
			<div class="user-info">
				<h1>Hulu</h1>
				<div class="address">
					<p><span>From:</span>info@miraz.com</p>
					<p><span>To:</span>shazada.com</p>
				</div>	
					<div class="msg">
						<h2>Hi, Vin!</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
						<span class="ej">Enjoy!</span>
						<p class="sender">
							- Your Hulu Team
						</p>
						<a href="#">Start Now</a>
					</div>
					<div class="bottom">
						<p class="nlink">www.hulu.com/help</p>
						<p class="brand">hulu Inc</p>
					</div>
				</div>
		</section>
	
	</div>
    )
}