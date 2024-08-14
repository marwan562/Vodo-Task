import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <div className=" flex flex-col h-[90vh] gap-5 items-center justify-center">
      <h2 className=" text-teal-600 text-3xl">Home Page</h2>
      <Button to="/movies">Go To Show Movies</Button>
    </div>
  );
};

export default HomePage;
