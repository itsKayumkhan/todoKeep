const Nav = ({ toggle, icon ,toggleIcon}) => {
  return (
    <div className="flex justify-between px-5 h-16 items-center bg-yellow-400 ">
      <div className="logo text-2xl bold flex items-center">
        <ion-icon
          class="icon-news px-3"
          name="document-text-outline"
        ></ion-icon>
        Kayumkhan_Sayal
      </div>
      <div className="nav-item w-[30%]">
        <ul className=" w-[100%] flex items-center justify-around">
          <div className="left flex justify-evenly">
            <li className="item uppercase px-3 text-xl cursor-pointer">Home</li>
            <li className="item uppercase px-3 text-xl cursor-pointer">
              About
            </li>
          </div>
          
            {icon ? (
             <li
            onClick={toggle}
            className="item uppercase shadow-md px-3 text-xl cursor-pointer icon-add top-5 relative bg-white rounded-md w-[20%] flex justify-center items-center h-10 border-yellow-300 border-spacing-2 "
          >
             <ion-icon
                name="add-outline"
                class="icon-add1 text-2xl visible"
                id="add_btn"
              ></ion-icon>
          </li>
            ) : (
              <li
              onClick={toggle}
              className="item uppercase shadow-md px-3 text-xl cursor-pointer icon-add top-5 relative bg-white rounded-md w-[20%] flex justify-center items-center h-10 border-yellow-300 border-spacing-2 "
            >
                <ion-icon
                className="icon-add1 text-2xl visible"
                name="trash-outline"
                id="del_btn"
              ></ion-icon>
            </li>
            )}
          
        </ul>
      </div>
    </div>
  );
};

export default Nav;
