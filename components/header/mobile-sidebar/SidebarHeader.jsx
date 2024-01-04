import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const SidebarHeader = () => {
  return (
    <div className="pro-header" style={{backgroundColor: GlobalConfig.BgHeader}}>
      <Link href="/">
        <Image width={50} height={50}
          src= {GlobalConfig.DskLog}
          alt="brand" />
      </Link>
      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close" style={{color:'#fff'}}></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
