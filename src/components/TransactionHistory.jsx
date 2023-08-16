import { useEffect } from "react";
import { useState } from "react"
import { getBillByUserId } from "../store/store";
import { useUserContext } from '../context/userContext';
import '../styles/transaction.scss';


export const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);
    const {user} = useUserContext();

    useEffect(() => {
        const handleFetchData = async() => {
            const {data} = await getBillByUserId(user?.id);
            setTransactions(data.data); 

        }

        handleFetchData();
    }, [])

    return (
        <>

            <table class="responstable">
            
            <tr>
                <th>ID</th>
                <th data-th="Driver details"><span>Payment</span></th>
                <th>Transaction Date</th>
                <th>Perchase</th>
            </tr>

            {transactions?.map(transaction => (

                <tr>
                    <td>{transaction?.id}</td>
                    <td>{transaction?.payment}</td>
                    <td>{transaction?.created_at}</td>
                    <td>${transaction?.price}</td>
                </tr>
            ))}
            
            
            </table>
        </>
    )
}