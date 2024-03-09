import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import AuthContext from "../context/auth-context";

const MyNavbar = () => {
  const authCtx = useContext(AuthContext);
  let location = useLocation();
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="p-2 sticky-top border-bottom border-light border-2"
      >
        <Container>
          <Nav className="me-auto offset-4 ">
            <NavLink
              to="/home"
              className="me-5 text-light"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              end
            >
              HOME
            </NavLink>
            {authCtx.isLoggedIn && (
              <NavLink
                to="/"
                className="me-5 text-light"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                })}
                end
              >
                STORE
              </NavLink>
            )}
            <NavLink
              to="/about"
              className="me-5 text-light"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              end
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/login"
              className="me-5 text-light"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              end
            >
              LogIn
            </NavLink>
            <NavLink
              to="/contact"
              className="text-light"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              end
            >
              Contact Us
            </NavLink>

            {location.pathname === "/" && (
              <div
                style={{
                  top: "9px",
                  right: "9px",
                  position: "fixed",
                  width: "90px",
                }}
              >
                <button
                  style={{
                    padding: "1px 12px",
                    borderRadius: "6px",
                    color: "white",
                    border: "1px solid cyan",
                    backgroundColor: "transparent",
                    position: "sticky",
                  }}
                >
                  <NavLink
                    to="cart"
                    style={({ isActive }) => ({
                      textDecoration: isActive ? "underline" : "none",
                      color: "white",
                    })}
                  >
                    cart
                  </NavLink>
                </button>
                <sup className="me-4 fs-5 text-info">0</sup>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
      <h1
        className="text-center"
        style={{
          fontSize: "100px",
          backgroundColor: "#777",
          color: "white",
          paddingBottom: "60px",
          margin: "0",
        }}
      >
        The Generics
      </h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MyNavbar;
