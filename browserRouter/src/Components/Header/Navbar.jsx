import style from './Navbar.module.css'

function Navbar(){
    return(<>
    <div className={style.header}>
        <h1>Bazaar</h1>
        
        <div className={style.seachbar}>
            <input type="text" name="search" id="" placeholder="Serch your item" />
        </div>

        <div className={style.short}>
            <select name="" id="">
            <option value="select" defaultValue>Short</option>
            <option value="price">By Price</option>
            <option value="quantity">By Quantity</option>
            </select>
        </div>
    </div>
    </>)
}

export default Navbar