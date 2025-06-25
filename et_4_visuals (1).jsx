import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ET4Visuals() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeTab, setActiveTab] = useState('about');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted!');
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center space-y-2 mb-6">
        <h1 className="text-4xl font-bold">ET4 Visuals</h1>
        <p className="text-lg text-gray-500">Capturing moments. Creating visuals. Elevating brands.</p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-4 mb-6">
        {['about', 'pricing', 'portfolio', 'bookings'].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </nav>

      {/* About Me */}
      {activeTab === 'about' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden">
              {/* Replace the src URL below with your actual image path */}
              <img
                src="https://placehold.co/200x200?text=Your+Photo"
                alt="Eddie Thomas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p>
                Hey! I'm Eddie, the creative behind ET4 Visuals. I'm a passionate photographer who brings energy,
                color, and emotion into every frame. Whether it’s gameday action, portraits, or promotional shoots —
                I turn vision into visuals.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {activeTab === 'pricing' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Pricing</h2>

          <h3 className="text-xl font-bold">Sports</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold">Pictures</h4>
                <p className="text-sm text-gray-500">Includes action shots, edited gallery</p>
                <p className="mt-2 font-semibold">$100</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold">Videos</h4>
                <p className="text-sm text-gray-500">Highlight reels and motion capture</p>
                <p className="mt-2 font-semibold">$100</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold">Pictures + Videos</h4>
                <p className="text-sm text-gray-500">Best value combo for full coverage</p>
                <p className="mt-2 font-semibold">$150</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Portfolio */}
      {activeTab === 'portfolio' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src={`/portfolio/photo${i + 1}.jpg`}
                alt={`Photo ${i + 1}`}
                className="rounded-xl shadow"
              />
            ))}
          </div>
        </section>
      )}

      {/* Bookings */}
      {activeTab === 'bookings' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Bookings</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your shoot..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={4}
              required
            />
            <Button type="submit">Submit Booking</Button>
          </form>
        </section>
      )}
    </div>
  );
}
