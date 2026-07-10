export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-3">
          We'd love to discuss your Government Tender requirements.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-lg">
                  📍 Office Address
                </h4>

                <p className="text-gray-600 mt-2">
                  Flat No. 201, Khasra No. 97/1/1, 2, 97/20,
                  <br />
                  Raghav Apartment, Street No. 67,
                  <br />
                  Narela, New Delhi – 110040
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  📞 Phone
                </h4>

                <a
                  href="tel:+919582728046"
                  className="text-blue-600 hover:underline"
                >
                  +91 95827 28046
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  💬 WhatsApp
                </h4>

                <a
                  href="https://wa.me/919582728046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  📧 Business Email
                </h4>

                <a
                  href="mailto:info@crosswayinfra.in"
                  className="text-blue-600 hover:underline"
                >
                  info@crosswayinfra.in
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  📧 Alternate Email
                </h4>

                <a
                  href="mailto:crosswayinfra@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  crosswayinfra@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-900 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}