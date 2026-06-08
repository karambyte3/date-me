import Link from 'next/link';

export default function notFound() {

  return (
    <div className='box'>
      <img alt='Въздишка' className='gif' src='/sigh.gif' />
      Страницата не е намерена
      <Link href='/'>
        <button>
          Към началото
        </button>
      </Link>
    </div>
  )
  
}
