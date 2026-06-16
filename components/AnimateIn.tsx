'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: AnimateInProps) {
  const [ref, isVisible] = useScrollAnimation()

  const getTransform = () => {
    if (direction === 'up') return 'translateY(32px)'
    if (direction === 'left') return 'translateX(-32px)'
    if (direction === 'right') return 'translateX(32px)'
    return 'none'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  )
}
