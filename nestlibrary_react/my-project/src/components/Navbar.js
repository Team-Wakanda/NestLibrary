 
 
 const Navbar = () => {
    return (
        <nav className="flex justify-around w-full mx-1 items-center">
            <div>
             <span>Nestcoin</span>
             <div>Reward tool</div>
            </div>
          <div>
              <ul className="flex gap-6 ">
                  <li>
                     Admin 
                  </li>
                  <li className="hover:text-cyan-500 cursor-pointer">
                      Upload
                  </li>
                  <li>
                     Dashboard
                  </li>
                  <li>
                      About
                  </li>
                  <li>
                      Contact
                  </li>
              </ul>
          </div>

        </nav>
    );
 }


 export default Navbar;