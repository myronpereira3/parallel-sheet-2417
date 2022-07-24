import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import "../style.css";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const navigate = useNavigate();
  return (
    <>
      <Box w="100%">
        <Flex
          color="white"
          bgColor="#25cf60"
          justifyContent="center"
          alignItems="center"
          h="60px"
        >
          Want to become a Reseller, Affiliate, or Integration Partner? We are
          recruiting for our new Partner Programs.
          <NavLink className="links" to="https://www.timecamp.com/partners">
            <u className="underline"> Learn more and apply here ➡️</u>
          </NavLink>
        </Flex>
      </Box>
      {/* Navbar------------------------------------- */}
      <Box bgColor='#fff' w="100%" p="1.25rem 1rem"  pos='sticky' top='0' zIndex='99'>
        <Box>
          <Navbar expand="lg" className="Navbar">
            <Container>
              <Navbar.Brand style={{ marginLeft: "100px" }} href="#home">
                <img
                  src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
                  alt="TimeCamp logo"
                  width="126px"
                  height="31px"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                <Nav style={{ marginLeft: "115px" }}>
                  <Nav.Link href="#home">Features</Nav.Link>
                  <Nav.Link href="#link">Pricing</Nav.Link>
                  <Nav.Link href="#link">Integrations</Nav.Link>
                  <Nav.Link href="#link">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link style={{ paddingRight: "20px" }} href="#home">
                    Book a Demo
                  </Nav.Link>

                  <div style={{ border: "0.1px solid #25cf60" }}></div>
                  <Nav.Link
                    style={{ paddingLeft: "20px" }}
                    onClick={() => navigate("/login")}
                  >
                    Sign in
                  </Nav.Link>
                </Nav>
                <Button
                  p="27px 40px "
                  ml="20px"
                  fontSize="1rem"
                  borderRadius="30px"
                  bgColor="#f7b801"
                >
                  <Link to="">Go to App</Link>
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Box>
      </Box>
    </>
  );
  //   ---------------------herosection================
}

export default BasicExample;
