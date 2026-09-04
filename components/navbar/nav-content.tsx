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
    label: "Education",
    link: "/education",
    id: "education-page",
  },
  {
    label: "Skills",
    link: "/skills",
    id: "skills-page",
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
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
      {navLinks.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
    </div>
  );
};
export default NavLinks;
