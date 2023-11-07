// https://nextjs.org/docs/app/building-your-application/rendering/client-components
'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MainForm } from '@/src/components/MainForm';
export default function Home() {

  // https://learn.javascript.ru/variables

  // const PI = 3.14;
  // const users = getUsers(); // users - масив, а це обєкт, тому в конст ссилка на обєкт

  // let user = {
  //   name: 'Ann',
  //   age: 2
  // }

  // user = {} // error
  // user.age = 10; // good (object field)

  // const number: number = 1;
  // number = 2; // error

  // https://www.typescriptlang.org/docs/handbook/basic-types.html

  // const [str, setStr] = useState(''); // string
  // по TypeScript рівнозначно
  const [str, setStr] = useState<string>();

  // use Effect without params (from initial component)
  useEffect(() => {
    console.log('useEffect []');
    fetch('http://localhost:5000').then(res => {
      return res.text();
    }).then((data) => {
      setStr(data);
      console.log('data: ', data)
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-extrabold dark:text-white mb-4">
        {str}
      </h1>
      <h2 className="text-2xl font-extrabold mb-4 text-zinc-600">Menu</h2>
      <ul className="pb-4 text-2xl text-center">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/auth">Authorization</Link>
        </li>
        <li>
          <Link href="/registry">Registration</Link>
        </li>
      </ul>
      <MainForm />
    </main>
  )
}
