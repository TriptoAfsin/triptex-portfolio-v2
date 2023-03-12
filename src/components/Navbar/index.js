import React, { useState } from "react";
import { Box, Text, Stack, Image, Flex } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo192.png";
import { motion } from "framer-motion";
import { FloatLeftWrapper, FloatRightWrapper } from "./Navbar.style";
import DarkModeButton from "../DarkModeButton";
import { useLocation } from "react-router-dom";

const Logo = props => {
  return (
    <FloatLeftWrapper>
      <Box {...props} display={"flex"} flexDirection={"row"}>
        <Link to="/">
          <Image
            src={logo}
            alt="Afshin Nahian Tripto"
            width={"40px"}
            height={"40px"}
          />
        </Link>
      </Box>
    </FloatLeftWrapper>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      onClick={toggle}
      transition="ease-in 1s"
    >
      {isOpen ? (
        <FloatLeftWrapper>
          <MdClose size="25" color="#f8f8f8" />
        </FloatLeftWrapper>
      ) : (
        <FloatRightWrapper>
          <BiMenuAltLeft size="30" />
        </FloatRightWrapper>
      )}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <>
      <Link to={to}>
        <Text
          display="block"
          {...rest}
          paddingX={[24, 3, 3, 3]}
          paddingY={[2, 2, 2, 2]}
        >
          {children}
        </Text>
      </Link>
    </>
  );
};

// const MenuItemList = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <Box
//       display={{ base: isOpen ? "block" : "none", md: "block" }}
//       flexBasis={{ base: "100%", md: "auto" }}
//     >
//       <Stack
//         spacing={8}
//         align="center"
//         justify={["center", "space-between", "flex-end", "flex-end"]}
//         direction={["column", "row", "row", "row"]}
//         pt={[4, 4, 0, 0]}
//       >
//         <MenuItem to="/">Home</MenuItem>
//         <MenuItem to="/how">CV</MenuItem>
//         <MenuItem to="/projects">Projects</MenuItem>
//         <MenuItem to="/contact">Contact</MenuItem>
//       </Stack>
//     </Box>
//   );
// };

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={[4, 4, 6, 6]}
      bg={["#4949f3", "#4949f3", "#4949f3"]}
      color={["white", "white", "primary.700", "primary.700"]}
      boxShadow="0px 2px 10px 5px rgba(33, 37, 43, 0.3)"
      // position="fixed"
      style={{ position: "sticky", top: 0, zIndex: 5 }}
      {...props}
    >
      {children}
    </Flex>
  );
};

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <NavBarContainer
        {...props}
        as={motion.div}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        key={isOpen}
      >
        <Logo />

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <Box
              bg={location?.pathname === "/" ? "#18181a" : "transparent"}
              borderRadius={10}
            >
              <MenuItem to="/" onClick={() => setIsOpen(false)}>
                Home
              </MenuItem>
            </Box>
            <Box>
              <a href="/cv/Afshin Nahian Tripto-WebDev.pdf">CV</a>
            </Box>
            <Box
              bg={location?.pathname === "/skills" ? "#18181a" : "transparent"}
              borderRadius={10}
            >
              <MenuItem to="/skills" onClick={() => setIsOpen(false)}>
                Skills
              </MenuItem>
            </Box>
            <Box
              bg={
                location?.pathname === "/projects" ? "#18181a" : "transparent"
              }
              borderRadius={10}
            >
              <MenuItem to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </MenuItem>
            </Box>
            <Box
              bg={location?.pathname === "/about" ? "#18181a" : "transparent"}
              borderRadius={10}
            >
              <MenuItem to="/about" onClick={() => setIsOpen(false)}>
                About Me
              </MenuItem>
            </Box>
            <Box>
              <a href="mailto:afsintripto@gmail.com">Hire Me</a>
            </Box>
            <DarkModeButton />
          </Stack>
        </Box>

        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </NavBarContainer>
    </>
  );
}

export default Navbar;
