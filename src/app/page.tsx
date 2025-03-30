import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Ikura from "../../public/ikura.jpg";
import {
  FaDiscord,
  FaGithub,
  FaHandHoldingHeart,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Home() {
  const SOCIAL_MEDIA = [
    {
      name: "Github",
      url: "https://github.com/Wakype",
      icon: <FaGithub className="group-hover:text-gray-500" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/wakype",
      icon: <FaInstagram className="group-hover:text-pink-500" />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/muhammad-hilmi-487bb2235/",
      icon: <FaLinkedin className="group-hover:text-blue-500" />,
    },
    {
      name: "Saweria",
      url: "https://saweria.co",
      icon: <FaHandHoldingHeart className="group-hover:text-orange-500" />,
    },
    {
      name: "Youtube",
      url: "https://youtube.com",
      icon: <FaYoutube className="group-hover:text-red-500" />,
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: <FaDiscord className="group-hover:text-indigo-500" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <FaXTwitter className="group-hover:text-sky-500" />,
    },
  ];

  return (
    <div className="relative bg-[#030712] scroll">
      <Image
        src={Ikura}
        alt="Picture of the author"
        className="top-0 left-0 fixed opacity-50"
      />

      <main className="min-h-screen grid grid-cols-8 grid-rows-5 gap-4 p-5 text-center">
        <Card className="row-span-2 col-span-2">
          <CardContent>Profil</CardContent>
        </Card>
        <Card className="col-span-3 row-span-2">
          <CardContent>About</CardContent>
        </Card>
        <Card className="col-span-2 row-span-3">
          <CardContent>Skills</CardContent>
        </Card>
        <Card className="row-span-full">
          <CardContent>Adjust</CardContent>
        </Card>

        <Card className="col-span-5">
          <CardContent>Projects</CardContent>
        </Card>

        <Card className="row-span-2 col-span-2">
          <CardContent>DM</CardContent>
        </Card>
        <Card className="col-span-3">
          <CardContent>Certificate</CardContent>
        </Card>
        <Card className="col-span-2 row-span-2">
          <CardContent>Blog</CardContent>
        </Card>

        <Card className="col-span-3">
          <CardContent>Time</CardContent>
        </Card>
        <Card className="cursor-pointer group">
          <CardContent className="flex items-center justify-center gap-x-1">
            <p className="group-hover:animate-spin group-hover:text-xl transition-all ease-in-out font-bold -rotate-45">?</p>
            <p className="group-hover:animate-spin group-hover:text-xl transition-all ease-in-out font-bold text-lg">?</p>
            <p className="group-hover:animate-spin group-hover:text-xl transition-all ease-in-out font-bold rotate-45">?</p>
          </CardContent>
        </Card>
        <div className="col-span-7 flex items-center gap-x-4">
          {SOCIAL_MEDIA.map((social) => {
            return (
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                className="w-full"
              >
                <Card className="group cursor-pointer">
                  <CardContent>
                    <div className="flex items-center gap-x-2 justify-center">
                      {social.icon}
                      <p>{social.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className="text-center mt-72 pb-5 relative z-20 flex justify-center ">
        <Card className="w-fit px-5 py-3 hover:translate-y-0">
          <div className="">
            <p className="text-gray-300 text-sm">
              Made with 💖 and <Badge variant={"secondary"}>(＾▽＾)</Badge>
            </p>
            <p className="text-gray-300 text-sm">
              © 2025 Muhammad Hilmi. All rights reserved.
            </p>
          </div>
        </Card>
      </footer>
    </div>
  );
}
