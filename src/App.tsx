import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">dltHub</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition font-medium">Solutions</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition font-medium">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Docs</a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Move data faster. <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">No complicated integrations.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            dltHub automates your entire data pipeline. From source to destination. 
            Built for data engineers who value simplicity over complexity.
          </p>
          <div className="flex gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Try Free
            </button>
            <button className="border-2 border-gray-300 hover:border-purple-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <p className="text-gray-600">Companies moving data with dltHub</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <p className="text-gray-600">Integrations ready to go</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
            <p className="text-gray-600">Uptime guarantee</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-5xl font-bold mb-4">Why choose dltHub?</h2>
            <p className="text-xl text-gray-600">Designed for modern data teams who move fast.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Zero Maintenance',
                desc: 'Set up once, run forever. Automatically handle schema changes, retries, and data quality checks.'
              },
              {
                title: 'Open Source at Heart',
                desc: 'Built on DLT. Full transparency, community-driven, self-hosted or managed cloud options.'
              },
              {
                title: 'Instant Visibility',
                desc: 'Real-time monitoring and detailed observability on every pipeline run.'
              },
              {
                title: 'Enterprise Scale',
                desc: 'Process petabytes of data reliably. Built for companies that take data seriously.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Logos Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Connect everywhere</h2>
          <p className="text-center text-gray-600 mb-16">Works with all your favorite tools</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Postgres', icon: '🐘' },
              { name: 'Snowflake', icon: '❄️' },
              { name: 'BigQuery', icon: '📊' },
              { name: 'Stripe', icon: '💳' },
              { name: 'Shopify', icon: '🛍️' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="text-5xl">{item.icon}</div>
                <p className="text-gray-600">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Simple pricing</h2>
            <p className="text-xl text-gray-600">Pay for what you use. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: 'Free',
                desc: 'For individuals',
                features: ['Up to 1M records/month', '1 Pipeline', 'Email support', 'Basic transformations']
              },
              {
                name: 'Business',
                price: '$299',
                desc: '/month, billed monthly',
                features: ['Up to 100M records/month', 'Unlimited pipelines', 'Priority support', 'Advanced monitoring', 'Webhooks & API'],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                desc: 'For large organizations',
                features: ['Unlimited records', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'On-premise option']
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-xl border-2 transition ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-300' 
                    : 'bg-white border-gray-200 hover:border-purple-200'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.desc}</p>
                </div>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-600">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'border-2 border-gray-300 hover:border-purple-600 text-gray-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to move data smarter?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started for free. No credit card required.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-indigo-600 rounded" />
                <span className="font-bold">dltHub</span>
              </div>
              <p className="text-gray-600">Modern data integration made simple.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">About</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Terms</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2026 dltHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
