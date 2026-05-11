const Testimonials = () => {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="shadow-lg p-8 rounded-2xl">
          <p>
            Tulip Hospitality made my trip stress-free and easy.
          </p>

          <h3 className="font-bold mt-6">
            Jane Okafor
          </h3>
        </div>

        <div className="shadow-lg p-8 rounded-2xl">
          <p>
            Amazing customer support and best deals.
          </p>

          <h3 className="font-bold mt-6">
            Tunde Adewale
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
