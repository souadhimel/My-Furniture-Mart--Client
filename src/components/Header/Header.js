import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
import { FcRadarPlot } from "react-icons/fc";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="navbar"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="text-black" href="/home">
            <FcRadarPlot></FcRadarPlot> Furniture Mart <span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} className="text-black" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-black" to="/explore">
              Explore
            </Nav.Link>

            <>
              <Nav.Link as={Link} className="text-black" to="/dashboard">
                Dashboard
              </Nav.Link>
            </>

            <Navbar.Text className="text-dark">
              <a href="#login" className="text-black">
                {user?.displayName}
              </a>
            </Navbar.Text>
            {!user?.email ? (
              <Nav.Link as={Link} className="text-black" to="/login">
                Login
              </Nav.Link>
            ) : (
              <button onClick={logOut} variant="light">
                Logout
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

// import "./Header.css";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { FcRadarPlot } from "react-icons/fc";
// import { Link } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

// const Header = () => {
//   const { user, logOut } = useAuth();

//   return (
//     <div className="navigation">
//       <Navbar variant="light" expand="md" sticky="top">
//         <Container fluid>
//           <Navbar.Brand to="#">
//             <FcRadarPlot></FcRadarPlot> Furniture Mart <span>.</span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="ms-auto my-2 my-lg-0 nav-link "
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <Link to="/home">Home</Link>
//               <Link to="/explore">Explore</Link>
//               <Link to="/dashboard">Dashboard</Link>

//               {!user?.email ? (
//                 <Nav.Link as={Link} className="text-white" to="/login">
//                   Login
//                 </Nav.Link>
//               ) : (
//                 <button onClick={logOut} variant="light">
//                   Logout
//                 </button>
//               )}

//               {/* {user.email ? (
//                 <button onClick={logOut} className="btn btn-primary">
//                   Log out
//                 </button>
//               ) : (
//                 <Link to="/login">Login</Link>
//               )}
//               <p>{user.displayName}</p> */}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
