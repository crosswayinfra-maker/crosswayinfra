export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          About Crossway Infra
        </h2>

        <p className="mt-8 text-lg leading-8 text-center text-gray-700">
          Crossway Infra Projects Pvt. Ltd. is a leading infrastructure company
          specializing in Government Tender projects across India. We deliver
          quality civil construction, infrastructure development and engineering
          solutions with a strong commitment to safety, transparency and timely
          execution.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="bg-blue-50 rounded-xl p-8 shadow">
            <h3 className="font-bold text-xl text-blue-900">Mission</h3>
            <p className="mt-3 text-gray-600">
              Deliver world-class infrastructure projects through quality,
              innovation and trust.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 shadow">
            <h3 className="font-bold text-xl text-blue-900">Vision</h3>
            <p className="mt-3 text-gray-600">
              Become one of India's most trusted government infrastructure
              contractors.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 shadow">
            <h3 className="font-bold text-xl text-blue-900">Coverage</h3>
            <p className="mt-3 text-gray-600">
              Executing Government Tender projects across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}