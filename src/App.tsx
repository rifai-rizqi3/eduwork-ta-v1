import { BsTelephone } from "react-icons/bs";
import { GoInfo, GoGlobe } from "react-icons/go";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl md:justify-between md:flex mx-auto text-gray-500">
        {/* kanan */}
        <div>
          <div className="flex items-center p-4 space-x-3">
            <BsTelephone />
            <p>(021) 893457</p>
            <a
              className="hover:text-red-500"
              href="https://www.instagram.com/your_instagram_link"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-red-500"
              href="https://www.facebook.com/your_facebook_link"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="hover:text-red-500"
              href="https://twitter.com/your_twitter_link"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        {/* kiri */}
        <div>
          <div className="flex items-center p-4 space-x-3">
            <GoInfo />
            <p>Support</p>
            <GoGlobe />
            <p>ID</p>
          </div>
        </div>
      </div>
      <hr />
      <Navbar />
    </>
  );
}
export default App;
