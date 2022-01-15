import NavBar from "./NavBar";

const Header: React.FC = () => {
  const navigation: any = [];
  return (
    <header className="max-w-6xl mx-auto">
      <NavBar navigation={navigation} />
    </header>
  );
};

export default Header;
