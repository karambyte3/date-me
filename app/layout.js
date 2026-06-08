import './style.css'

export default function layout({children}) {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <html lang='bg'>
      <head>
        <link rel='icon' type='image/png' href={`${basePath}/heart.png`} />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Jua' />
      </head>
      <body id='app'>
        {children}
      </body>
    </html>
  )

}
