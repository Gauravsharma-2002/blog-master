// import { getAllFilesFrontMatter } from '@/lib/mdx'
// import siteMetadata from '@/data/siteMetadata'
// import ListLayout from '@/layouts/ListLayout'
// import { PageSEO } from '@/components/SEO'

// export const POSTS_PER_PAGE = 5

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('blog')
//   const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
//   const pagination = {
//     currentPage: 1,
//     totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
//   }

//   return { props: { initialDisplayPosts, posts, pagination } }
// }

// export default function Blog({ posts, initialDisplayPosts, pagination }) {
//   return (
//     <>
//       <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
//       <ListLayout
//         posts={posts}
//         initialDisplayPosts={initialDisplayPosts}
//         pagination={pagination}
//         title="All Posts"
//       />
//     </>
//   )
// }

import siteMetadata from '@/data/siteMetadata'
import { PublicationData } from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A list of publication Made by me along with my colleagues and mentors"
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publication
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A list of Publication that I had made with my mentor and colleagues
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {PublicationData.map((d) => (
              <Card
                key={d?.title}
                title={d?.title}
                description={d?.description}
                imgSrc={d?.imgSrc}
                href={d?.href}
                github={d?.github}
                sponsor={d?.Sponsor}
                contributors={d?.contributors}
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
