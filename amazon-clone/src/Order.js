import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Order.css"
import moment from "moment";
import {useStateValue} from './StateProvider.js';
import { getBasketTotal } from './Reducer';
import CurrencyFormat from 'react-currency-format';
function Order({order}) {
    const [{basket},dispatch] = useStateValue();
    console.log('order data',order.data)
    return (
        <div className='order'>
            <h2>Order</h2>
             <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
             <p className="order__id">
                 <small><h3>Order Id:</h3>{order.id}</small>

             </p>
             {order.data.basket?.map(item =>(
                 <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 hideButton

                 />
             ))}
             <CurrencyFormat
                renderText={(value) =>(
                <h3 className="order_total">Order total:{value}</h3>
             
                )}
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}

            />
        </div>
    )
}

export default Order
