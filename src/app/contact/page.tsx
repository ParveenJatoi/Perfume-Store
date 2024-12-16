import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="bg-pink-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <p className="mb-4 text-gray-700">
              Feel free to reach out to us via email or visit our social media pages.
            </p>

            <div className="flex items-center mb-4">
              <HiMail className="text-gray-500 mr-2 text-2xl" />
              <a href="mailto:info@perfumes.com" className="text-blue-600">
                info@perfumes.com
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebookF className="text-3xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedinIn className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509838!2d144.95373531567094!3d-37.81621897975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57767a7524d1e41!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1602521923732!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;