import Link from "next/link";
import Image from "next/image";
import Ambius from "../public/footer.png";
import { CiFacebook } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";

export default function Footer() {
  return (
    <div className="flex bg-slate-600 text-white p-3 justify-between text-base">
      <div className="mx-16 my-10 text-lg">
        <div>
          <Link href="https://www.ambius.com/resources/blog/plant-profile/the-ultimate-guide-to-indoor-plants#">Locations</Link>
        </div>
        <div>
        <Link href="https://www.ambius.com/resources/blog/plant-profile/the-ultimate-guide-to-indoor-plants#">Search</Link></div>
        <div>
        <Link href="https://www.ambius.com/contact-us">Contact</Link></div>
      </div>
      <div className="mx-16 my-10 text-lg">
        <div>
        <Link href="https://www.ambius.com/">Home</Link>
        </div>
        <div>
        <Link href="https://www.ambius.com/plant-design">Plant design</Link>
        </div>
        <div>
        <Link href="https://www.ambius.com/air-quality">Air quality</Link>
        </div>
        <div>
        <Link href="https://www.ambius.com/scenting">Scenting</Link></div>
        <div>
        <Link href="https://www.ambius.com/holiday-decor">Holiday décor</Link>
        </div>
        <div>
        <Link href="https://www.ambius.com/projects">Projects</Link>
        </div>
      </div>
      <div className="mx-16 my-10 text-lg">
        <div>
          <Link href="https://www.ambius.com/global">Global</Link>
          </div>
        <div><Link href="https://www.ambius.com/live-chat">Live chat</Link>
        </div>
        <div><Link href="https://www.rentokil-initial.com/site-services/cookie-and-privacy-policy/privacy-policy.aspx?__hstc=174780029.691dcc1bfd8f1d07d3070ba3003e1828.1729193121296.1729663993512.1729666242910.16&__hssc=174780029.2.1729666242910&__hsfp=2531108240">Privacy policy</Link>
        </div>
        <div><Link href="https://www.ambius.com/legal-statement">Legal statement</Link>
        </div>
        <div><Link href="https://www.ambius.com/about/careers-at-ambius">Careers</Link>
        </div>
        <div><Link href="https://www.ambius.com/resources/blog/plant-profile/the-ultimate-guide-to-indoor-plants#">Manage cookies</Link>
        </div>
      </div>
      <div>
        <Image
          src={Ambius}
          alt="logo"
          width={300}
          height={80}
          title="Ambius"
          priority
          className="mx-11 -my-8"
        />
        <div className="flex gap-2 mx-10 ">
          <Link href="https://www.facebook.com/Ambius">
            <CiFacebook size={50} />
          </Link>
          <Link href="https://www.pinterest.com/ambius/">
            <FaPinterest size={40} />
          </Link>
          <Link href="https://www.linkedin.com/company/ambius/">
            <TiSocialLinkedinCircular size={50} />
          </Link>
          <Link href="https://twitter.com/ambius">
            <FaXTwitter size={40} />
          </Link>
          <Link href="https://www.youtube.com/user/AmbiusVideos">
            <SiYoutubemusic size={40} />
          </Link>
          <Link href="https://www.instagram.com/ambius/">
            <FaInstagram size={40} />
          </Link>
        </div>
        <h3 className="mx-9 text-center my-2">
          © 2024 Rentokil Initial plc and subject to the
          <br /> conditions in the legal statement.
        </h3>
      </div>
    </div>
  );
}
