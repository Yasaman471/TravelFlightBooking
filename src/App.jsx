import Booking from "./components/Booking";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[url(../src/assets/banner.jpg)] bg-cover bg-no-repeat">
      <Header />
      <section className="h-screen">
        <Booking />
        <div>Table</div>
      </section>
    </div>
  );
}

export default App;
