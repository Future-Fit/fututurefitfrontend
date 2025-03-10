import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home";
import '../styles/globals.css';

export const metadata = {
  title: "Future Fit International | Job Portal ",
  description: "Future Fit International - Job Portal",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
