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
        <p>
          Through my life I have been interested in different sports and
          physical activities. I have played finnish baseball and nowadays I
          play volleyball in a club but I do like other ball sports as well. I
          also enjoy going to the gym and walking the dog. Basically I like to
          reset myself with physical activity.{' '}
        </p>

        <p>
          Apart from sports I also like to read books, listen to music/podcasts,
          and watch movies/series. Spending time with friends and family playing
          board games among other things. New addition to my list of hobbies is
          continuing my development in different areas of software development
          and other areas of information technology. Now that my school is done
          I have more time to do individual projects and learn new things.{' '}
        </p>
      </div>
      <div className="profilePicture">
        <Image src="/pete.jpg" alt="" width={500} height={500}></Image>
      </div>
    </main>
  );
}
