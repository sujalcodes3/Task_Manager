import PaneField from "./PaneField";

const NavigationPane = () => {
  return (
    <div className="flex justify-around mt-6 mr-12">
      <PaneField label="Log out" />
      <PaneField label="Sign up" />
    </div>
  );
};

export default NavigationPane;
