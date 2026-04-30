import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  className = '',
}: PropsWithChildren<{ delay?: number; className?: string }>) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

