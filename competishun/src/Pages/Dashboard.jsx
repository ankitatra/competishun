import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Card,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to ={"/movie"}className="flex items-center">
          Movies
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Hotel
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Food
        </a>
      </Typography>
     
    </ul>
  );

  return (
    <div>
        <Navbar className="mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4 bg-yellow-500 .text-gray-900">
      <div className="container mx-auto flex items-center justify-between bg-yellow-500 .text-gray-900 ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block ">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      
      <MobileNav open={openNav}>
        <div className="container mx-auto bg-neutral-900">{navList}</div>
      </MobileNav>
    </Navbar>

    {/* <div className="mx-auto max-w-screen-md py-12"> */}
        {/* <Card className="mb-12 overflow-hidden"> */}
          <img
            alt="nature"
            className="h-[34rem] w-full object-cover object-center"
            src="https://img.freepik.com/free-photo/high-angle-view-smiling-woman-watching-something-internet-while-eating-popcorn-night-home_637285-4439.jpg"
          />
        {/* </Card> */}
    {/* </div> */}
    </div>
    
    
  );
}
