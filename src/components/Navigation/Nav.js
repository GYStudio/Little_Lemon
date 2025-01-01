import Header from "../Navigation/Header";
import Footer from "./footer";

const Nav = ({ children }) => {
  return (
    <>
      <Header />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Nav;