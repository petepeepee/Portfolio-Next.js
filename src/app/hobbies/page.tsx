import React from 'react';
import Image from 'next/image';

const Hobbies: React.FC = () => {
  return (
    <main className="hobbiesPage">
      <div className="hobbiesImage">
        <Image
          src="/volleyball.webp"
          alt=""
          width={500}
          height={500}
          layout="responsive"
          objectFit="contain"
        ></Image>
        <div className="hobbiesText"></div>
      </div>
    </main>
  );
};

export default Hobbies;
