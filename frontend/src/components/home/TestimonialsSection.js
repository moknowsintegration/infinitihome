import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  // PLACEHOLDER: Replace with real testimonials from client
  const testimonials = [
    {
      name: 'Sarah J.',
      location: 'Buckhead, GA',
      rating: 5,
      text: 'The family portal gives me such peace of mind. I can see when the caregiver arrives and get daily updates on my mother. The care coordinators are incredibly responsive.',
      service: 'Personal Care'
    },
    {
      name: 'Michael T.',
      location: 'Virginia Highland, GA',
      rating: 5,
      text: 'Our care coordinator Jessica knows my father\'s needs better than we do. She matched us with an amazing caregiver who speaks Spanish. This has been life-changing for our family.',
      service: 'Companion Care'
    },
    {
      name: 'Linda K.',
      location: 'Decatur, GA',
      rating: 5,
      text: 'After my husband\'s stroke, we needed skilled nursing at home. INFINITI\'s nurse was professional, caring, and helped him recover faster than we expected. Highly recommend.',
      service: 'Skilled Nursing'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Families Are Saying
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#EAB308" className="text-yellow-500" />
            ))}
          </div>
          <p className="text-xl text-gray-600">4.9/5 rating from 500+ Atlanta families</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-lg p-8 relative shadow-lg hover:shadow-xl transition"
              data-testid={`testimonial-${index + 1}`}
            >
              <Quote className="text-purple-300 mb-4" size={40} />
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-purple-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-purple-600 font-semibold mt-2">
                  {testimonial.service}
                </p>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#EAB308" className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=infiniti+home+care+enterprise+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block"
          >
            Read More Reviews on Google
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <em>Note: Testimonials are placeholder examples. Replace with actual client testimonials.</em>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;