import { FC } from 'preact/compat'
import { motion } from 'framer-motion'

import links from '../data/links'

const parentTransition = {
  initial: 'initial',
  animate: 'enter',
  exit: 'exit',
  variants: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  transition: {
    delay: 0.2,
    staggerChildren: 0.1,
    when: 'beforeChildren'
  }
}

const childTransition = {
  variants: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  }
}

const Links: FC<{}> = () => {
  return (
    <div id="links">
      <motion.div {...parentTransition}>
        {Object.entries(links).map(([title, list], index) => {
          return (
            <>
              {list.map(
                ({
                  title,
                  url,
                  description
                }: {
                  title: string
                  url: string
                  description: string
                }) => {
                  return (
                    <motion.a class={'link'} href={url} {...childTransition}>
                      <h3 class="title">{title}</h3>
                      <p class="description">{description}</p>
                      <span class="url" aria-hidden="hidden">
                        {url}
                      </span>
                    </motion.a>
                  )
                }
              )}
            </>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Links
