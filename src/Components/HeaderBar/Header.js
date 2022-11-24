import NavigationPane from "./NavigationPane";
import Heading from "./Heading";

const Header = () => {
  return (
    <div className="flex justify-between border-b-2 border-sky-500 pb-4 shadow-md shadow-sky-200">
      <Heading />
      <NavigationPane />
    </div>
  );
};

export default Header;
