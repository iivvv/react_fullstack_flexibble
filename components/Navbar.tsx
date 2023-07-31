import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null; //判断是否已经登录
  // const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10 ">
        {/*  大logo */}
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {/* 动态遍历写好的菜单列表 */}
          {NavLinks.map((link, index) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      {/* 已经登录了就显示创建作品 */}
      <div className="flexBetween gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <>
            <AuthProviders />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
