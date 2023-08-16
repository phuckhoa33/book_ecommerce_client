import { useEffect, useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext'
import '../styles/payment.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

export const Payment = () => {
	const navigate = useNavigate();
	const {user, username} = useUserContext();
	const {totalAfterTaxAndShipping, order, orderCart, setOrderCart} = useCartContext();
	const {cart} = useCartContext();
	const [date, setDate] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		if(!user.address || !user.phone){
			navigate("/profile/none")
			toast.warn("You must update your information about phone and address");
		}
		else if(totalAfterTaxAndShipping===0 || !orderCart){
			navigate("/errorMan")
		}
		const currentDate = new Date();

		const day = currentDate.getDate();
		const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
		const year = currentDate.getFullYear();

		setDate(day+"/"+month+"/"+year);

		return () => {
			setOrderCart(false)
		}
	}, []);

	const handleSubmitOrder = async(e) => {
		e.preventDefault();
		setLoading(true);
		await order(user?.id);
		setLoading(false);

	}


    return (
        <div className="wapper">
		<section className="sidebar-section">
			<div className="paysam">
				<h2>payment summary</h2>
				<ul>
					<li>
						<em>Amount</em>
						<span>${totalAfterTaxAndShipping} USD</span>
					</li>	
					<li>
						<em>Date</em>
						<span>{date}</span>
					</li>
					<li>
						<em>Issuer</em>
						<span>{user?.firstname}</span>
					</li>
					<li>
						<em>Invoice Number</em>
						<span>{user?.phone}</span>
					</li>
				</ul>
			</div>
		</section>
		<section className="container-section">
			<div className="user-info">
				<h1>{username}</h1>
				<div className="address">
					<p><span>Your address:</span>{user.address}</p>
					<p><span>Phone:</span>{user.phone}</p>
				</div>	
					<div className="msg">
						<h2>Hi, {username}</h2>
						<h3>Your order is: </h3>
						<p>
							<ul>
								{cart?.map(item => (
									<li>
										<div>
											<div><strong>Name:</strong> {item.title}</div>
											<div><strong>Amount:</strong> {item.quantity}</div>
										</div>
									</li>
								))}
							</ul>
							
						</p>
						<a href="#" onClick={handleSubmitOrder}>{loading?<Spinner/>:"Order"}</a>
					</div>
					<div className="bottom" style={{cursor: "pointer"}}>
						<p onClick={() => navigate("/contact")} className="nlink">Contact</p>
						<p onClick={() => navigate("/aboutus")} className="brand">About us</p>
					</div>
				</div>
		</section>
	
	</div>
    )
}