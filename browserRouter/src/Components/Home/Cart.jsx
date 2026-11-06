import CartData from "./Cartdata";
import style from "./Cart.module.css"

function Cart (){

return(
<>
<div className={style.CartWrapper}>

{
    CartData.map((item)=>
        <div className={style.Container} key={item.id}>
            <div className={style.cartImg}>
            <img src={item.image} alt="imge" />
            </div>
            <div className={style.cartInfo}>
            <h1>{item.name}</h1>
            <h2>Price: {item.price}</h2>
            <p>Item Left: {item.quantity}</p>
            </div>
        </div>

    )
}
</div>
</>

)
    }

export default Cart;