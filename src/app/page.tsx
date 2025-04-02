import { SocialMediaCard } from "@/components/SocialMediaCard";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Ikura from "../../public/ikura.jpg";
import Firefly from "../../public/Firefly.png";
import KianaOpening from "../../public/kianaOpening.png";
import KianaFinality from "../../public/kianaFinality.png";
import School from "../../public/school.png";
import Yoru from "../../public/yoru.png";
import Zeta from "../../public/vestia.png";
import CountRamadhan from "../../public/countRamadhan.png";
import {
  FaAward,
  FaClock,
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaGithub,
  FaHandHoldingHeart,
  FaInstagram,
  FaLinkedin,
  FaSun,
  FaUser,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiOsu } from "react-icons/si";
import { SpinningCard } from "@/components/SpinningCard";
import { CardHeaderComponent } from "@/components/CardHeaderComponent";
import { TimeCard } from "@/components/TimeCard";
import { EditsCard } from "@/components/EditsCard";

export default function Home() {
  const SOCIAL_MEDIA = [
    {
      name: "Github",
      url: "https://github.com/Wakype",
      icon: <FaGithub className="group-hover:text-gray-500" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/im.waky",
      icon: <FaInstagram className="group-hover:text-pink-500" />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/muhammad-hilmi-487bb2235/",
      icon: <FaLinkedin className="group-hover:text-blue-500" />,
    },
    {
      name: "Saweria",
      url: "https://saweria.co/Wakype",
      icon: <FaHandHoldingHeart className="group-hover:text-orange-500" />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@im.wakype",
      icon: <FaYoutube className="group-hover:text-red-500" />,
    },
    {
      name: "Osu!",
      url: "https://osu.ppy.sh/users/15815492",
      icon: <SiOsu className="group-hover:text-pink-500" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/wakypeee",
      icon: <FaXTwitter className="group-hover:text-sky-500" />,
    },
  ];

  return (
    <div className="relative bg-[#040714] scroll">
      <Image
        src={Ikura}
        alt="Background"
        className="top-0 left-0 fixed opacity-30"
      />

      <main className="min-h-screen grid grid-cols-8 grid-rows-4 gap-4 p-5 overflow-hidden">
        <Card className="row-span-2 col-span-2">
          <CardContent>Profile</CardContent>
        </Card>

        <Card className="col-span-3 row-span-2">
          <CardHeaderComponent icon={<FaUser />} title="About Me" />
          <CardContent>
            <p>
              A software engineer with over a year of experience, currently a
              first-year student at the University of Pancasila. Loving code and
              video editing. Skilled in using ReactJS, and NextJS. Combining
              what I learn at college with real-world experiences and enjoy
              learning new things to create innovative software solutions.
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-2 row-span-3">
          <CardHeaderComponent icon={<FaCode />} title="Skills" />
          <CardContent>Skills</CardContent>
        </Card>

        <Card className="row-span-5">
          <CardHeaderComponent icon={<FaSun />} title="Adjust" />
          <CardContent>Adjust</CardContent>
        </Card>

        <Card className="col-span-5">
          <CardHeaderComponent icon={<FaFolderOpen />} title="Projects" />
          <CardContent>Projects</CardContent>
        </Card>

        <Card className="row-span-2 col-span-2">
          <CardHeaderComponent icon={<FaAward />} title="Certificates" />
          <CardContent>Certificates</CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeaderComponent icon={<FaEnvelope />} title="Contact" />
          <CardContent>Contact</CardContent>
        </Card>

        <Card className="col-span-2 row-span-2 cursor-pointer group">
          <EditsCard
            images={[
              { src: Firefly.src, alt: "Firefly - Honkai Star Rail" },
              { src: Ikura.src, alt: "Ikura - Yoasobi" },
              { src: KianaOpening.src, alt: "Kiana Kaslana - Opening" },
              { src: KianaFinality.src, alt: "Kiana Kaslana - Herrscher of Finality" },
              { src: Yoru.src, alt: "Yoru - Valorant" },
              { src: School.src, alt: "Oreki - Hyouka" },
              { src: Zeta.src, alt: "Vestia Zeta - Hololive Indonesia" },
              { src: CountRamadhan.src, alt: "Counting Ramadhan" },
            ]}
          />
        </Card>

        <Card className="col-span-3">
          <CardHeaderComponent icon={<FaClock />} title="Time" />
          <CardContent>
            <TimeCard />
          </CardContent>
        </Card>

        <Card className="cursor-pointer group">
          <SpinningCard />
        </Card>

        <div className="col-span-7 flex items-center gap-x-4">
          {SOCIAL_MEDIA.map((social) => (
            <SocialMediaCard
              key={social.name}
              name={social.name}
              url={social.url}
              icon={social.icon}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
