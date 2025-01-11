import Link from "next/link";
import AwwwardsLogo from "../ui/logos/awwwards-logo";
import FacebookLogo from "../ui/logos/facebook-logo";
import InstaLogo from "../ui/logos/insta-logo";
import XLogo from "../ui/logos/x-logo";
import { cn } from "@/lib/utils";
import SlideInOut from "../animations/slider-in-out";
import TextAnimationWrapper from "../animations/text-wrapper";

const contacts = {
  number: "+44 207 112 82 85",
  email: "contact@artistsweb.com",
  address: "Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom",
  socials: [
    {
      name: "Instagram",
      link: "#",
      icon: InstaLogo,
    },
    {
      name: "Facebook",
      link: "#",
      icon: FacebookLogo,
    },
    {
      name: "X",
      link: "#",
      icon: XLogo,
    },
    {
      name: "Awwwards",
      link: "#",
      icon: AwwwardsLogo,
    },
  ],
};

function Footer() {
  return (
    <footer className="w-full px-container py-32">
      <div className="flex items-center justify-between w-full gap-10">
        <div>
          <div className="max-w-[43.125rem]">
            <p className="text-[2.438rem] font-semibold">
              <TextAnimationWrapper
                text="We love crafting unforgettable digital experiences, brands and
            websites with people like you."
              />
            </p>
          </div>

          <div className="pt-24">
            <p className="text-base">Get in touch</p>
            <ul className="text-[1.469rem] font-semibold pt-4 space-y-2">
              <li>{contacts.number}</li>
              <li>
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              </li>
              <li>{contacts.address}</li>
            </ul>
          </div>
        </div>
        <div className="space-y-10">
          <div className="w-full bg-black flex gap-24 justify-between text-white rounded-full px-[2.438rem] py-[1.5rem]">
            <p className="text-[1.242rem] whitespace-nowrap">Follow us</p>
            <div className="flex gap-10 items-center">
              {contacts.socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  className={cn("group w-[1.5rem] h-[1.5rem] relative", {
                    "w-[2rem] h-[2rem]": social.name === "Awwwards",
                  })}
                >
                  <social.icon />
                  <div
                    className={cn(
                      "absolute -inset-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out duration-500 h-[3.5rem] w-[3.5rem] border-2 border-primary rounded-full",
                      {
                        "-inset-3": social.name === "Awwwards",
                      }
                    )}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full py-[2.938rem] px-[3.625rem] bg-[#ECF1F4] rounded-3xl">
            <div className="text-center space-y-4">
              <h4 className="text-[2.438rem] font-semibold">
                Let&apos;s get started
              </h4>
              <p className="text-base">
                We&apos;d love to hear about your project.
              </p>
            </div>
            <div className="pt-10 flex justify-center items-center w-full">
              <SlideInOut
                label="Get in touch"
                size="lg"
                variant={"primary"}
                className="border-none text-white text-[1.469rem] font-semibold w-full transition-transform hover:scale-105 ease-in-out duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 text-base text-[#71777E] flex justify-between w-full items-center">
        <p>© 2025 Artistweb Ltd · All rights reserved.</p>
        <div className="flex gap-6 items-center">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
