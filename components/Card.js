import SocialIcon from './social-icons'
import FolderIcon from './icon'
import Image from 'next/image'

const Card = ({
  title,
  description,
  imgSrc,
  href,
  github,
  youtube,
  contributors,
  tech1,
  email,
  name,
  year,
  // tech2,
  // tech3,
  type,
  status,
  fundingAgency,
}) =>
  type === 'student' ? (
    <CardComponent year={year} name={name} title={title} email={email} imgSrc={imgSrc} />
  ) : (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
        <div className="p-6">
          <div className="flex flex-row items-center justify-between ">
            <div className="my-2 border-solid">
              <FolderIcon />
            </div>
            <div className="flex flex-row justify-between">
              {status ? `(${status})` : null}
              <div className="mx-1.5">
                {youtube ? <SocialIcon kind="youtube" href={youtube} size="6" /> : null}
              </div>
              <div className="mx-1.5">
                {href ? <SocialIcon kind="external" href={href} size="6" /> : null}
              </div>
              <div className="mx-1.5">
                {github ? <SocialIcon kind="github" href={github} size="6" /> : null}
              </div>
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>

          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <div className="flex flex-row justify-start gap-2">
            {/* {fundingAgency?.map((ele, id) => (
            <div key={id} className="text-sm text-gray-400">
              {ele}
            </div>
          ))} */}
            {fundingAgency ? <p>funded by : {fundingAgency}</p> : null}
            {/* {tech1} */}
            {/* {tech1} &#8226; {tech2} &#8226; {tech3} */}
          </div>
          <div className="flex flex-row justify-start gap-2">
            {contributors?.map((ele, id) => (
              <>
                <div key={id} className="text-sm text-gray-400">
                  {ele}
                </div>
              </>
            ))}
            {tech1 ? <p>Amt : {tech1}</p> : null}
            {/* {tech1} &#8226; {tech2} &#8226; {tech3} */}
          </div>
        </div>
      </div>
    </div>
  )

export default Card

function shortenTitle(title, maxLength = 25) {
  return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title
}
const CardComponent = ({ email, name, imgSrc, title, year }) => {
  return (
    <div className="md:w-1/2 md:p-4" style={{ maxWidth: '544px' }}>
      <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
        <div className="p-6">
          {imgSrc ? (
            <Image
              src={imgSrc}
              // layout="fill"
              alt={`${name}'s avatar`}
              className="mb-4 h-48 w-full rounded-md object-cover"
            />
          ) : null}

          <div className="text-right">
            {name ? (
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{name}</h2>
            ) : null}
            {email ? <p className="text-gray-600 dark:text-gray-300">{email}</p> : null}
            {title ? (
              <p className="font-medium text-gray-500 dark:text-gray-400">{shortenTitle(title)}</p>
            ) : null}
            {year ? <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">{year}</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
