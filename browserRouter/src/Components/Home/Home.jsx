import Cart from "./Cart";
import SideBar from "./SideBar";
function Home (){
    return(
        <>
        <div className="flex" >
        <SideBar></SideBar>
        <Cart></Cart>
        </div>
        </>
    )
}

export default Home