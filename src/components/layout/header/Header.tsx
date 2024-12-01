"use client";
import { usePathname, useRouter } from "next/navigation"; 
import scss from './Header.module.scss'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logo.png'

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 845) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { title: "Главная", href: "/" },
    { title: "О компани", href: "/about" },
    { title: "Контакты", href: "/contacts" },
  ];

  
  const handleLinkClick = (href: string) => {
    setIsOpen(false); 
    router.push(href); 
  };

  return (
    <header className={scss.header}>
    <div className={scss.topSection}>
      <div className={`${scss.logo} ${isOpen ? scss.active : ""}`}>
        <Image src={logo}  alt="photo" width={300} height={60} onClick={() => handleLinkClick("/")}/>
      </div>
      <nav className={`${scss.navbar} ${isOpen ? scss.active : ""}`}>
        <ul>
          {links.map((item, index) => (
            <li key={index}   className={pathname === item.href ? scss.active : ""}>
              <Link href={item.href} onClick={() => handleLinkClick(item.href)}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`${scss.contact} ${isOpen ? scss.active : ""}`}>
          <a href="tel:+996709328037">+996 709 32 80 37</a>
        </div>
      <div className={`${scss.burger} ${isOpen ? scss.active : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
  )
}

export default Header