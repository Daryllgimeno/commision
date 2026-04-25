import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
}: PropsWithChildren<{ delay?: number }>) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

