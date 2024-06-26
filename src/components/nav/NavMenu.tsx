import { NavMenuItem } from "./NavMenuItem";
import { motion } from "framer-motion";  
import { easings } from "../../utils/animations/animations";

export const NavMenu = () => {

  const navItems = [
    { title: "Home", path: "/" }, 
    { title: "Episodes", path: "/episodes" }, 
    { title: "Characters", path: "/characters" }, 
    { title: "Watch", path: "#" }
  ];

  return (
    <motion.nav
        className="fixed w-screen h-screen bg-[#eee9e4] flex flex-col justify-end p-8 z-[50]"
        initial={{ y: "-100%" }}
        animate={{
            y: 0,
            transition: { duration: 1, ease: easings.easeOutQuart },
        }}
        exit={{ y: "-100%", transition: { duration: 0.3 } }}
    >
      <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
        {navItems.map((item, index) => (
          <NavMenuItem key={index} index={index + 1} title={item.title} path={item.path} />
        ))}
      </motion.ul>
    </motion.nav>
  )
}
