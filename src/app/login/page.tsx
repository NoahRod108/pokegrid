import loginBtn from "@/assets/images/login.png";
import navbar from "@/assets/images/login-navbar.svg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section>
        <div className="app">
          <div className="login-bg-container">
            <div className="login-bg-pattern"></div>
            <div></div>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-full absolute top-0 left-0 z-10 min-w-full bg-[#1E1E1E]">
          <div className="pokedex-bg rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col justify-between items-center min-h-full">
              <Image src={navbar} alt="navbar" />
              <div className="login-content text-center font-poetsen">
                <h1>PokeGrid!</h1>
                <h2>A fun guessing game</h2>
              </div>
              <div className="pb-20">
                <Image src={loginBtn} alt="login_button" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
