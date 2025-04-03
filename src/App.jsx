import "./App.css";
import Navbar from "./components/navbar";
import AuthRoute from "./routes/auth-route";
import Routing from "./routes/routes";
function App() {
  const user = false;
  if (user) {
    return (
      <>
        <div className="main h-[100vh] flex flex-col bg-[#C6C2B3] pt-2 box-border">
          <div className="h-10% sticky top-0 ">
            <Navbar />
          </div>
          <div className=" h-[100%] overflow-auto ">
            <Routing />
          </div>
        </div>
      </>
    );
  } else {
    return <AuthRoute />;
  }
}

export default App;
