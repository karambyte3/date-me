import Head from 'next/head';

export default function custom404() {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      <Head>
        <title>Покана за среща</title>
      </Head>
      <div className='box'>
        <img alt='Въздишка' className='gif' src={`${basePath}/sigh.gif`} />
        Страницата не е намерена
        <a href={`${basePath}/`}>
          <button>
            Към началото
          </button>
        </a>
      </div>
    </>
  )

}
