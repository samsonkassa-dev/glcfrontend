import Footer from "../components/Footer";
import GlcHome from "../components/GlcHome";


import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <div className="bg-[#f6f9ff]">
      <Head>
        <title>GLC Portal</title>
      </Head>
      
      <GlcHome/>
    
      <Footer />
    </div>
  );
}

export default Home;
