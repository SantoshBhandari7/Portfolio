import { NavLink } from "./nav-link";

const navLinks: { label: string; link: string; id: string }[] = [
  {
    label: "Home",
    link: "/",
    id: "home-page",
  },
  {
    label: "About",
    link: "/about",
    id: "about-page",
  },
  {
    label: "Projects",
    link: "/projects",
    id: "project-page",
  },
  {
    label: "Contact",
    link: "/contact",
    id: "contact-page",
  },
];

const NavLinks = () => {
  return (
    <div className="flex  gap-1 text-sky-600  sm:flex sm:flex-row sm:hidde sm:gap-1 lg:flex-row lg:items-center lg:gap-5">
      {navLinks.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
    </div>
  );
};
export default NavLinks;
