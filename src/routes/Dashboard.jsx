import Cards from "../components/Cards";
import SideBar from "../components/SideBar";
export const Dashboard = () => {
  return (
    <>
      <div className="md:flex h-screen overflow-hidden bg-[#f2f2f2]">
        <SideBar />
        <div className="md:flex-1 py-3 overflow-y-scroll mx-[3%] md:mx-[1%]">
          {/* <h1 className="text-2xl font-bold ">Dashboard</h1> */}

          <Cards />
        </div>
      </div>
    </>
  );
};
