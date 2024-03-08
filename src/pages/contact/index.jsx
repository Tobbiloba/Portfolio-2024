import Curve from '@/components/Layout/Curve'
import Head from 'next/head'
import ContactScreen from '@/components/testing/src/components/Contact'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve backgroundColor="#6E97D0">
        <ContactScreen />
      </Curve>
    </>
  )
}
