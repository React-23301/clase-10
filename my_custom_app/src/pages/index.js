import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Button from './componentes/button';
import Card from './componentes/card';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Hello world
        <br></br>
        <Button></Button>
        <Card data={{ text: 'texto enviado por props', colortexto: 'red' }}></Card>
      </main>
    </>
  )
}
