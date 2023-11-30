import Image from "next/image";
import Link from "next/link";

const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <Link href="/">
        <Image width={50} height={50}
          src="/images/logo-no-background.png"
          alt="brand" />
      </Link>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close" style={{color:'#fff'}}></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
