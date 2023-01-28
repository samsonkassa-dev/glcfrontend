import { useRouter } from "next/router";

import { BsArrowRight } from "react-icons/bs";
import styles from "../styles/Home.module.css";

function HomePage() {
  const router = useRouter();
  return (
    <>
      <div className="bg-[#f6f9ff]  text-black">
        <div className={styles.container}>
          <main className={styles.main}> 
            <div className="md:text-[70px] text-[50px] text-center font-black m-0">
              <h1 className="font-fred">
                Welcome to{" "}
                <span className="text-[#271282]"> Glorious Life </span> <br />{" "}
                <span className="text-[#e33901]"> Church</span> Portal!
              </h1>
            </div>
            <div className="text-[20px] font-bold text-[#251212]  leading-tight">
              <p className={styles.description}>
                Contact the Office for any inquiries
              </p>
            </div>

            <div className="flex justify-center lg:justify-start  mt-14">
              <button
                className="bg-[#175daa] w-48 py-3.5 text-white rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
                onClick={(e) => router.push("/login")}
              >
                <p className="text-lg">Register Here</p>
                <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default HomePage;
