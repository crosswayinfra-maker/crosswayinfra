<section id="contact" className="bg-gray-100 py-20"></section>
export default function Contact() {
  return (
    // JSX
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
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Contact Information
            </h3>

            <p className="mb-4">
              📍 <strong>Office Address</strong><br />
              Flat No. 201, Khasra No. 97/1/1, 2, 97/20,<br />
              Raghav Apartment, Street No. 67,<br />
              Narela, New Delhi – 110040
            </p>

            <p className="mb-4">
              📞 <strong>Phone</strong><br />
              +91 95827 28046
            </p>

            <p className="mb-4">
              📧 <strong>Email</strong><br />
              info@crosswayinfra.in
            </p>

            <p>
              ✉️ <strong>Alternate Email</strong><br />
              crosswayinfra@gmail.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border rounded-lg p-3"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
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