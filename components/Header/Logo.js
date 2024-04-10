import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image width={207} height={82} src={"/images/logo.png"} alt="Logo" />
    </Link>
  );
};

export default Logo;
