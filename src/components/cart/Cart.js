import React from 'react';
const Cart = (props) => {
    const cart=props.cart;
   // const total= cart.reduce((total,prd)=>total+prd.price,0)
   let total=0;
   for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total= (total+product.price); 
   }
   let shipping=0;
   if(total>35){
    shipping=0;
   }
   else if(total>15){
    shipping=4.99;
   }
   else if(total>0){
      shipping=12.99;
   }
   const tax=(total/10).toFixed(2);
    const grandTotal=(total+shipping+Number(tax)).toFixed(2);
    const formatNumber= num =>{
        const precision=num.toFixed(2)
        return Number(precision);
    }
    return (
        <div>
            <h4>order summary:</h4>
            <p>items order:{cart.length}</p>
            <p>product price:{formatNumber(total)}</p>
            <p><small>shipping cost:{shipping}</small></p>
            <p><small>tax+vat:{tax}</small></p>
            <p>Total Price:{grandTotal}</p>
            <button className='main-button'> Review order</button>
        </div>
    );
};

export default Cart;