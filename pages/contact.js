import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:amarnath@sliet.ac.in" title="gmail" icon="amarnath" />
            <ContactLink
              href="https://www.linkedin.com/in/amar-nath-dhebla-6bbb0b68/"
              title="linkedin"
              icon="amar nath"
            />
            <ContactLink
              href="https://scholar.google.com/citations?user=Ae4f05cAAAAJ&hl=en"
              title="google-scholar"
              icon="Amar Nath"
            />
            <ContactLink href="https://dblp.org/pid/121/6139.html" title="dblp" icon="amarNath" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
