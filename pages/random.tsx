import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SayHelloButton from "@/components/SayHelloButton";
import "@/styles/globals.css";
import SayHelloPythonButton from "@/components/SayHelloPythonButton";
import TodoDemo from "@/components/TodoDemo";
import TitleSection from "@/components/TitleSection";

const Random = () => {
    return (
      <div className="text-white bg-black">
        <Header />
        <section className="text-black body-font lg:pt-20">
          <TitleSection
            titleTop="Random"
            titleBottom="Experiments"
            description="Some random experiments going on here."
            />
          <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              See tutorial series at &nbsp;
              <a href="https://youtube.com/playlist?list=PLXHusJiEgw3yXzR0HFwp0CQfH94qOkqDC&si=wb4Sd7f4-Y3g5Yji" className="underline">
              Full Stack Engineering Tutorial</a>
            </p>
            </div>
        </section>

        <div className="max-w-5xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <h2 className="text-white text-2xl title-font font-medium mb-3">
              Buttons that call AWS lambda functions in the backend </h2>
          <SayHelloButton />
          <SayHelloPythonButton />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Todo Demo from AWS Amplify Gen2 Tutorial </h2>
          <TodoDemo />
           </div>
        <Footer />
      </div>
    );

  }
  
  export default Random;