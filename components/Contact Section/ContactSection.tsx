import React from "react";
import Schedule from "./Schedule";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

type Props = {};

function ContactSection({}: Props) {
  return (
    <div className="bg-black py-10 border-t-2 border-white border-dashed">
      <div className="space-y-12 md:space-y-0  flex flex-col md:flex-row lg:max-w-5xl md:mx-auto">
        <div className=" w-full  flex items-start justify-center">
          <Schedule />
        </div>

        {/* Contact Section */}
        <div className="w-full px-4 space-y-4">
          {/* Text */}

          <div className="space-y-2">
            <h2 className="text-slate-200 text-2xl lg:text-4xl font-medium">
              Dental Name
            </h2>
            <p className="text-slate-300 font-medium max-w-2xl">
              We are experienced and internationally certified healthcare
              workers
            </p>
          </div>

          {/* Address and socials*/}
          <div className="flex flex-col items-around space-y-4">
            <div className="flex space-x-4 items-center">
              <MapPin className="w-6 h-6 text-slate-200" />
              <p className="text-slate-300 font-medium max-w-3xl">
                Taj Mahal, Agra, Uttar Pradesh
              </p>
            </div>
            <div className="flex space-x-4 items-center">
              <Phone className="w-6 h-6 text-slate-200" />
              <p className="text-slate-300 font-medium max-w-2xl">
                +91 9999999999, +91 1111111111
              </p>
            </div>
            <div className="flex space-x-4 items-center">
              <Mail className="w-6 h-6 text-slate-200" />
              <p className="text-slate-300 font-medium max-w-2xl">
                jagrathshettylxix@gmail.com
              </p>
            </div>
          </div>

          {/* Website Pages and socials */}
          <div className="flex space-x-5 py-5 border-black/40 border-t-2 border-b-2 border-dashed justify-around">
            <div className="flex flex-col items-start">
              <h3 className="text-sky-600 font-semibold mb-2">Pages</h3>
              <Link
                className="text-lg text-slate-300 hover:text-slate-400 transition-all duration-300 "
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-lg text-slate-300 hover:text-slate-400 transition-all duration-300 "
                href="/services"
              >
                Services
              </Link>
              <Link
                className="text-lg text-slate-300 hover:text-slate-400 transition-all duration-300 "
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-sky-600 font-semibold mb-2">Socials</h3>
              <Link
                href="#"
                className="flex text-lg text-slate-300 hover:text-slate-400 transition-all duration-300"
              >
                <Instagram className="mr-2" />
                Instagram
              </Link>
              <Link
                href="#"
                className="flex text-lg text-slate-300 hover:text-slate-400 transition-all duration-300"
              >
                <Facebook className="mr-2" />
                Facebook
              </Link>
              <Link
                href="#"
                className="flex text-lg text-slate-300 hover:text-slate-400 transition-all duration-300"
              >
                <YoutubeIcon className="mr-2" />
                Youtube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
