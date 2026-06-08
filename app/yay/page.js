export default function page() {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className='box'>
      <img alt='Ура' className='gif' src={`${basePath}/gumball-and-darwing.gif`} />
      {'Урааа~ хайде да планираме среща <3'}
    </div>
  )

}
