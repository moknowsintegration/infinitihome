import { MapPin, Clock } from 'lucide-react';

const AtlantaServiceArea = () => {
  const serviceAreas = [
    { area: 'Buckhead', response: '15-min response' },
    { area: 'Midtown', response: '18-min response' },
    { area: 'Decatur', response: '22-min response' },
    { area: 'Virginia Highland', response: '20-min response' },
    { area: 'Alpharetta', response: '35-min response' },
    { area: 'Marietta', response: '38-min response' },
    { area: 'Sandy Springs', response: '25-min response' },
    { area: 'Roswell', response: '40-min response' },
    { area: 'Brookhaven', response: '20-min response' },
    { area: 'Dunwoody', response: '30-min response' },
    { area: 'East Atlanta', response: '28-min response' },
    { area: 'Chamblee', response: '25-min response' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proudly Serving Metro Atlanta
          </h2>
          <p className="text-xl text-gray-600">
            Fast response times across the greater Atlanta area
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {serviceAreas.map((location, index) => (
              <div
                key={index}
                className="bg-purple-50 rounded-lg p-4 flex items-center justify-between hover:bg-purple-100 transition"
                data-testid={`service-area-${index + 1}`}
              >
                <div className="flex items-center">
                  <MapPin className="text-purple-600 mr-3" size={20} />
                  <span className="font-semibold text-gray-900">{location.area}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="mr-1" size={14} />
                  {location.response}
                </div>
              </div>
            ))}
          </div>

          {/* Zip Code Checker */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Check Your Zip Code
            </h3>
            <p className="text-purple-100 mb-6">
              Enter your zip code to see if we serve your area and estimated response time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter zip code"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-purple-300 focus:border-white outline-none"
                maxLength="5"
                data-testid="zip-code-input"
              />
              <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition">
                Check Availability
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 bg-gray-100 rounded-lg p-12 text-center">
            <MapPin className="mx-auto text-gray-400 mb-4" size={64} />
            <p className="text-gray-600 font-semibold mb-2">Interactive Service Area Map</p>
            <p className="text-sm text-gray-500">
              Google Maps integration can be added here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlantaServiceArea;