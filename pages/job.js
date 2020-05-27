import { Briefcase, LocationMarker, CurrencyDollar, Calendar, Check, Pencil, Link } from 'heroicons-react'
import Layout from '../components/ApplicationLayout'
import HeadingMeta from '../components/application/HeadingMeta'

const metadata = [
  { icon: Briefcase, label: 'Full-time' },
  { icon: LocationMarker, label: 'Remote' },
  { icon: CurrencyDollar, label: '$120k – $140k' },
  { icon: Calendar, label: 'Closing on January 9, 2020' }
]

const primary = [
  { icon: Check, label: 'Publish', href: '#' }
]

const secondary = [
  { icon: Pencil, label: 'Edit', href: '#' },
  { icon: Link, label: 'View', href: '#' }
]

export default () => (
  <Layout>
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <HeadingMeta title="Back End Developer" metadata={metadata} primary={primary} secondary={secondary}/>
      </div>
    </header>
    <main>
       {/* Placeholder */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
      </div>
    </main>
  </Layout>
)
