import Head from 'next/head'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import ScrollUp from '@/components/ScrollUp'
import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blaze Addis Cafe, Restaurant & Bakery</title>
        <meta
          name='description'
          content='Blaze Addis Cafe, Restaurant & Bakery'
        />
        <link rel="shortcut icon" href="/images/favicon-512x512.png" />
        <link rel="icon" href="/images/favicon-512x512.png" />
        <link rel="apple-touch-icon" href="/images/favicon-192x192.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
      <Loader />
      <ScrollUp />
    </div>
  )
}
