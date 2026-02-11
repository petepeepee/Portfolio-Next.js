import Image from 'next/image';

export default function Entry(): React.ReactElement {
  return (
    <main className="entryPage">
      <div className="entryText">
        <h1>Hi there!</h1>
        <p>
          Welcome to my portfolio-page. The page has been built with Next.js and
          Tailwind. I wanted to create a portfolio that is both simple and easy
          to navigate while learning/remembering how Next.js and Tailwind work.
        </p>

        <h2>Something about me</h2>
        <p>
          My name is Petri Paasila and I have just completed the Bachelor´s
          Degree Programme in Business Information Technology at Jyväskylä
          University of Applied Sciences and I am looking actively for a job in
          the field of information technology. I am interested in working as a
          full-stack developer or data scientist/engineer.
        </p>
      </div>
      <div className="profilePicture">
        <Image src="/pete.jpg" alt="" width={500} height={500}></Image>
      </div>
    </main>
  );
}
