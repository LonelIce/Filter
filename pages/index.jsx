import React from 'react';
import Link from 'next/link';

function Index() {
  return (
    <Link href='/shop'>
      <a href='/#'>Перейти в магазин</a>
    </Link>
  );
}
export default Index;
