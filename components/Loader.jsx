import { useEffect, useState } from 'react'
import styles from '@/styles/components/Loader.module.scss'

function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a timeout to remove the loader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000)

    // Cleanup the timeout when component unmounts
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={`${styles.loader} ${!isLoading ? styles['fade-out'] : ''}`}>
      <img src='images/loader.gif' alt='loader' />
    </div>
  )
}

export default Loader
