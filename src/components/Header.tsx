import NavBar from "./NavBar";

const Header: React.FC = () => {
  const navigation: any = [];
  return (
    <header className="max-w-6xl mx-auto border-b-2 border-amber-100">
      <NavBar navigation={navigation} />
    </header>
  );
};

export default Header;
