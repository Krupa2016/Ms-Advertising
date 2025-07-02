// components/StatCounter.jsx
"use client"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const StatCounter = ({ target, duration = 1000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.5,     // trigger when 50% visible
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0
      const end = parseInt(target)
      const increment = end / (duration / 16)

      const animate = () => {
        start += increment
        if (start < end) {
          setCount(Math.floor(start))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
          setHasAnimated(true)
        }
      }

      animate()
    }
  }, [inView, hasAnimated, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default StatCounter
