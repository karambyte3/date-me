'use client'

import Link from 'next/link';
import {useState} from 'react';

export default function page() {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [img, $img] = useState('puppy-eyes');
  const [how, $how] = useState(false);
  const [p, $p] = useState(null);

  const updteImg = (im) => {
    $img(im);
  }

  const nah = () => {
    const x = 8 + Math.random() * 72;
    const y = 8 + Math.random() * 72;

    $p({x: `${x}%`, y: `${y}%`});
    updteImg('unamused');
  };

  const dontdoit = () => {
    nah();
    updteImg('shock');
    $how(true)
  }

  return (
    <div className='box'>
      <img alt='Гъмбол' className='gif' src={`${basePath}/${img}.gif`} />
      {how ? 'Хммм, нямаш избор!' : 'Роси, ще излезеш ли с мен?'}
      <div className='btns'>
        <Link className='yes' href='/yay'>
          <button onMouseOver={() => updteImg('sparkle-eyes')} onMouseOut={() => updteImg('puppy-eyes')}>
            Да
          </button>
        </Link>
        <button className='no' 
          style={p ? {position: 'absolute', top: p.x, right: p.y} : null} 
          onClick={dontdoit} onMouseOver={nah}>
            Не
        </button> 
      </div>
    </div>
  )
  
}
