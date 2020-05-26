import Layout from '../components/ApplicationLayout'
import HeadingMeta from '../components/application/HeadingMeta'

export default () => (
  <Layout>
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <HeadingMeta title="Back End Developer" />
      </div>
    </header>
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
      </div>
    </main>
  </Layout>
)
