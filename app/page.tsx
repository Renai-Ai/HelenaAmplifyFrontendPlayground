import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import SayHelloButton from "@/components/SayHelloButton";
import "@/styles/globals.css";

const App = () => {
    return (
      <div className="text-white bg-black">
        <Header /> 
        <Main />
        <Footer />
      </div>
    );

  }
  
  export default App;