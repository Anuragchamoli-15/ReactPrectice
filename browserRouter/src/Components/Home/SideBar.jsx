import style from './sideBar.module.css'

function SideBar(){
    return(<>
    <div className={style.SideBarContainer}>
        <div className={style.sidebarProfile}>
            <h3>Profile</h3>
            <img src="" alt="" />
        </div>
        <div className={style.sidebarCategory}>
            <p>Select your category</p>
            <div className='flex  flex-wrap items-center gap-4'>
            <label htmlFor="men">Men</label>
            <input type="checkbox" name="men" id="men" />

            <label htmlFor="women">Women</label>
            <input type="checkbox" name="women" id="women" />

            <label htmlFor="kids">Kids</label>
            <input type="checkbox" name="kids" id="kids" />
            </div>

        </div>
    </div>
    </>)
}

export default SideBar;