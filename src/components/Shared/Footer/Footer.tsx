import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="bg-black text-white p-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center">
              <i className="fas fa-shipping-fast text-2xl mr-2"></i>
              <span className="text-sm">
                FREE DELIVERY For all orders over $120{" "}
              </span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-headset text-2xl mr-2"></i>
              <span className="text-sm">
                24/7 HELP CENTER Dedicated 24/7 support
              </span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-undo text-2xl mr-2"></i>
              <span className="text-sm">
                SATISFIED OR REFUNDED Free returns within 14 days
              </span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-lock text-2xl mr-2"></i>
              <span className="text-sm">
                100% SECURE PAYMENTS Accept all payment methods
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold">Parcel-Ecom</h4>
            <p className="mt-4 text-sm">
              Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="mt-2 text-sm">
              Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold">INFORMATION</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  My Cart
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Orders and Returns
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">CUSTOMER SERVICE</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Customer Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">NEWSLETTER</h4>
            <p className="mt-4 text-sm">
              Enter your email to receive daily news and get 20% off coupon for
              all items. No spam, we promise
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Email address"
              />
              <button className="px-4 py-2 bg-gray-800 text-white rounded-r-md">
                SUBSCRIBE
              </button>
            </div>
            <div className="mt-4 flex space-x-2">
              <Image
                width={20}
                height={20}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8W-vI2Bb7wbCowSI6w0ZXnBho0O9GWOH-Q&s"
                alt="AMEX"
              />
              <Image
                width={20}
                height={20}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8W-vI2Bb7wbCowSI6w0ZXnBho0O9GWOH-Q&s"
                alt="Pay"
              />
              <Image
                width={20}
                height={20}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8W-vI2Bb7wbCowSI6w0ZXnBho0O9GWOH-Q&s"
                alt="Discover"
              />
              <Image
                width={20}
                height={20}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8W-vI2Bb7wbCowSI6w0ZXnBho0O9GWOH-Q&s"
                alt="Shop"
              />
              <Image
                width={20}
                height={20}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8W-vI2Bb7wbCowSI6w0ZXnBho0O9GWOH-Q&s"
                alt="VISA"
              />
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <span className="text-sm">© 2024, Vogal. All Rights Reserved.</span>
            <div className="text-sm">SCROLL UP</div>
          </div>
        </div>
      </footer>
    </>
  );
};
