// import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
// import SnippetsLayout from '@/layouts/SnippetsLayout'
import { PageSEO } from '@/components/SEO'
import { students } from '@/data/projectsData'
import Card from '@/components/Card'

// export const POSTS_PER_PAGE = 5

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('snippets')
//   const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
//   const pagination = {
//     currentPage: 1,
//     totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
//   }

//   return { props: { initialDisplayPosts, posts, pagination } }
// }

export default function Students({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="students that i worked with and those who contributed to me in some way"
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Students
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Students those i worked with and those contributed to researched work
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {students.map((d) => (
              <Card
                key={d?.title}
                type={'student'}
                title={d?.title}
                // description={d?.description}
                // imgSrc={d?.imgSrc}
                name={d?.name}
                year={d?.year}
                email={d?.email}

                // youtube={d?.youtube}
                // github={d?.github}
                // sponsor={d?.Sponsor}
                // contributors={d?.contributors}
                // tech2={d.tech2}
                // tech3={d.tech3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
