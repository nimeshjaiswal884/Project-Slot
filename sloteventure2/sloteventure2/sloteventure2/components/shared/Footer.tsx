import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="SlotEventure Logo"
              width={150}
              height={50}
            />
          </Link>
          <p className="mt-4 md:mt-0 md:ml-4">
            Discover and book the best events, travel, and food experiences in your city with SlotEventure.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:text-left">
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/work-with-us">Work with Us</Link></li>
              <li><Link href="/list-with-us">List with Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Explore</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/events/music">Music Events</Link></li>
              <li><Link href="/events/comedy">Comedy Shows</Link></li>
              <li><Link href="/events/workshops">Workshops</Link></li>
              <li><Link href="/events/sports">Sports Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center space-x-4 md:justify-start">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/images/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/images/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} SlotEventure. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
