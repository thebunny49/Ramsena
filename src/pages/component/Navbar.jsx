
import "./Navbar.css";
function Navbar() {
  return (
    <div style={{backgroundColor:'black', marginBottom:30}}>
      <nav
        className="navbar container navbar-expand-lg bg-body-tertiary"
        style={{ display: "flex", justifyContent: "space-between", backgroundColor:'black' }}
      >
        <div className="container-fluid">
          <img src="./white.png" alt="" style={{width:50, height:50, marginLeft:50}} />
          <p style={{color:'white', fontWeight:700, marginTop:20}}>Ramsena Coins</p>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{backgroundColor:"white"}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="pop navbar-nav n1 me-auto mb-2 mb-lg-0 ml-sm-0 ml-m-0"
              style={{ padding: 20 }}
            >
              <li className="nav-item" style={{ display: "flex",marginRight: 10, }}>
               
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ fontWeight: "700",color:"white" }}
                  href="#"
                >
                  Token
                </a>
              </li>
              <li className="nav-item" style={{ display: "flex",marginRight: 10, }}>
               
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "500",color:"white" }}
                >
                  Roadmap
                </a>
              </li>
              <li className="nav-item" style={{ display: "flex" ,marginRight: 10,}}>
                
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "500",color:"white" }}
                >
                  Whitepaper
                </a>
              </li>
              <li className="nav-item" style={{ display: "flex" ,marginRight: 10,}}>
             
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "500",color:"white" }}
                >
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex">
             <button>Download Whitepaper</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// <div className="collapse navbar-collapse " id="navbarSupportedContent" >
// <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
//
// </ul>
//
// </div>