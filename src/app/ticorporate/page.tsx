// pages/ticorporate.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Ticorporate: React.FC = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsEnlarged(!isEnlarged);
  };

  const enlargeImage = (index: number) => {
    if (index !== currentImageIndex) {
      setIsEnlarged(!isEnlarged);
    }
  };

  const images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[] = [
    {
      src: '/datareducer1.png',
      alt: 'Image 1',
      width: 700,
      height: 700,
    },
    {
      src: '/datareducer2.png',
      alt: 'Image 2',
      width: 700,
      height: 700,
    },
    {
      src: '/datareducer3.png',
      alt: 'Image 3',
      width: 700,
      height: 700,
    },
    {
      src: '/navigointifunktio.png',
      alt: 'Image 4',
      width: 700,
      height: 700,
    },
    {
      src: '/redux-devtools.png',
      alt: 'Image 5',
      width: 700,
      height: 700,
    },
    {
      src: '/saavutettavuus.png',
      alt: 'Image 6',
      width: 700,
      height: 700,
    },
    {
      src: '/stackbuildernappulat.png',
      alt: 'Image 7',
      width: 700,
      height: 700,
    },
    {
      src: '/storage.png',
      alt: 'Image 8',
      width: 700,
      height: 700,
    },
    {
      src: '/store.png',
      alt: 'Image 9',
      width: 700,
      height: 700,
    },
    {
      src: '/storets_persistConfig.png',
      alt: 'Image 10',
      width: 700,
      height: 700,
    },
    {
      src: '/storewrap.png',
      alt: 'Image 11',
      width: 700,
      height: 700,
    },
    {
      src: '/tilanjaarvonesimerkki.png',
      alt: 'Image 12',
      width: 700,
      height: 700,
    },
    {
      src: '/tutorial.png',
      alt: 'Image 13',
      width: 700,
      height: 700,
    },
    {
      src: '/tutorialmodal.png',
      alt: 'Image 14',
      width: 700,
      height: 700,
    },
    {
      src: '/tutorialmodalinreitinkuuntelija.png',
      alt: 'Image 15',
      width: 700,
      height: 700,
    },
    {
      src: '/useEffectesimerkki.png',
      alt: 'Image 16',
      width: 700,
      height: 700,
    },
  ];

  return (
    <main className="ticorporatePage">
      <div className="ticoText">
        <h2>Project description</h2>
        <p>
          PACKY is designed as a tool for beginner application developers. The
          application offers options for technology solutions for the
          application designed by the user, based on the technologies chosen by
          the user and the features of the application.
        </p>

        <p>
          The application was based on a Software Engineering course project
          planned for the spring, which was modified into a more functional and
          better overall entity.
        </p>

        <h2>Role</h2>

        <p>
          My main role in the project was as a frontend developer, and I was
          mainly responsible for state management. My secondary role was
          supposed to be as a tester, but state management and other frontend
          development tasks took up so much time that we agreed I would help
          Matias with testing if needed. In TC-Hops, the technical role I wanted
          was therefore arranged.
        </p>

        <p>
          During the project, I also participated in content creation, planning
          and implementation of various functions, improving accessibility, and
          optimization. For the project, we used the React Next.js framework,
          and for state management, I used the Redux Toolkit and Redux-Persist
          libraries.
        </p>

        <h2>Technologies and tools used</h2>

        <ul className="teknologiat">
          <li>VSCode</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Persist</li>
          <li>Github</li>
          <li>Git</li>
        </ul>

        <h2>Start of the project</h2>

        <p>
          Before the Ticorporate project started, I had fairly strong confidence
          in my abilities in application development, whether I was dealing with
          the frontend or the backend, as well as in my research skills and my
          ability to learn and apply knowledge. Despite my confidence, when the
          project began and the state management responsibilities fell on my
          shoulders, my nervousness increased somewhat due to my relatively
          limited experience with the Next.js framework and state management in
          general, which had only been briefly covered in previous courses. As
          mentioned earlier, for state management, I chose Redux, which is
          somewhat outdated, but after reading a thesis on React's state
          management systems, I arrived at this choice. The beginning of the
          project for me involved reviewing the use of Next.js and its
          documentation, as well as going through Redux documentation and
          practice.
        </p>

        <p>
          My experience in application development as a team was limited to the
          aforementioned Spring Software Engineering course, and thus a
          large-scale project was also a new experience. My previous background
          with projects was mostly with course final projects, and these were
          not even close to the same level as Ticorporate. Teamwork itself was
          familiar to me, and I consider myself responsible, so to speak an easy
          colleague to work with. For this reason, I was relatively confident
          that there would be no problems in that regard, and I felt that
          teamwork was quite a strength for me. In general, the SCRUM method and
          general rules were easily resolved, and the development environment
          was set up quickly.
        </p>

        <h2>What Ticorporate taught and the biggest successes</h2>

        <p>
          In the TC-Hops discussion, I also mentioned that my goal is to have a
          technical role and to develop both my technical skills as an
          application developer and my self-confidence in my own abilities. My
          intention was also to develop my project work skills, improve my
          understanding of the different stages of application development, and
          strengthen my understanding and readiness for working life. I believe
          I achieved the goals I set for myself.
        </p>

        <p>
          The reasons for my confidence are as follows: I gained experience
          using Next.js, and my understanding/skills in application development
          improved by delving into a different framework after Angular. Using
          Next.js taught me to work with a more 'flexible' framework, meaning
          choosing the tools to use, whereas Angular includes many more
          ready-made solutions, for example regarding state management. For
          state management, there were different libraries available, and we
          chose Redux. There were differences between the frameworks also in
          routing, for example, where routing in Angular is done manually, and
          Next.js uses a file-based routing approach. I feel that personally
          using a new 'more flexible' framework gave me perspective, especially
          regarding the solutions used and how to implement them. Implementing
          state management deepened my knowledge and skills in many ways, for
          example defining and implementing the Store in the application, saving
          state for the application in the correct way (initially saving to
          localStorage, whereas at the end changing to sessionStorage),
          passing/changing state in different components using functions. In
          addition to state management, I got to develop and design
          functionalities in general such as creating different modals,
          navigating within the application, and improving accessibility. I also
          assisted with backend queries, and more generally when problems arose.
          The length of the course and its sprints and demo presentations also
          expanded my understanding of the application development project
          process and breaking the project into smaller parts, as well as
          recognizing the most important elements when setting goals in addition
          to general project work.
        </p>

        <ul>
          <li>SCRUM practices:</li>
          <p>
            Our group had a fairly informal/modified approach to SCRUM
            practices, which might not work in every team, but in our group it
            worked flawlessly. The sprints were planned and broken down together
            on a whiteboard, and every day we went through what each person was
            working on. Our unique practice worked flawlessly, and for the most
            part, we were able to complete the tasks we had planned for each
            sprint.
          </p>
          <p>
            Even though I already had some experience with a SCRUM project from
            the spring courses, my understanding of the tasks of different roles
            and the management of the overall picture grew during the project.
          </p>

          <li>Teamwork: </li>
          <p>
            Specifically from the perspective of application development, I was
            not solely responsible for everything but was able to be part of a
            team, which in itself eased the burden when the tasks could be
            shared among several people. Otherwise, our team's collaboration
            worked flawlessly, and everyone carried their own weight and
            performed their role very well.
          </p>
          <p>
            Communication within the group worked brilliantly and everyone both
            gave and received help from other group members when needed. If a
            group member finished their own tasks, they would proactively move
            on to the next thing or help others.
          </p>

          <li>Breaking down problems/goals</li>
          <p>
            As the project progressed, I learned to break down problems and
            achievable goals into the smallest possible parts, so that even
            larger problems/goals were easier to solve.
          </p>

          <li>Confidence in one's own skills and ideas:</li>
          <p>
            As the project progressed and during group discussions, both among
            the group, in my own application development, and in helping others
            with problems, I noticed my skills improving both in working with
            the application framework (Next.js) and in problem-solving in
            general. I also learned that sometimes it is worth lowering the bar
            when searching for information, even if it is a so-called 'simple'
            problem that one has solved before.
          </p>

          <li>The importance of planning:</li>
          <p>
            In the meetings held towards the end of the project, planning became
            a larger part than at the beginning of the project; things were
            broken down into very small parts and more time was spent thinking
            about solutions. In hindsight, it would have been good to plan even
            more precisely at the start of the project, for example all the
            technologies, break goals down into smaller parts so that they don't
            seem so large, and go through the overall picture of the project as
            accurately as possible. Although I would say that our project went
            at least well, I noticed at the beginning some minor difficulties in
            the sense that we started coding relatively quickly and did not
            necessarily think, for example, about the project size accurately
            enough. Of course, for instance, after the first demo presentation,
            we understood from the feedback that we had started working on a
            slightly too large scale.
          </p>
          <li>Customer's impact on the project:</li>
          <p>
            Although our project was not a so-called 'client project,' the
            feedback given by the teachers, for example after the first demo
            presentation, served as so-called client feedback, after which we
            started to modify our project in a simpler direction.
          </p>
        </ul>

        <p>
          {' '}
          From a technical standpoint, I consider my greatest achievements to be
          creating a functional state management system and learning a new
          framework. On the other hand, in terms of personal growth and project
          work, the greatest successes were learning the practices of project
          cycles and various phases, and gaining experience in teamwork through
          application development. I also consider it important to mention that
          the performance of the entire team and the final result were great
          successes.
        </p>
      </div>
      <div className="images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container ${isEnlarged && index === currentImageIndex ? 'enlarged' : ''}`}
            onClick={() => {
              handleImageClick(index);
              enlargeImage(index);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      {isEnlarged && (
        <div
          className="enlarged-image-container "
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '999',
            backdropFilter: 'blur(5px)',
            width: '100vw',
            height: '100vh',
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'auto',
            objectFit: 'contain',
          }}
        >
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={images[currentImageIndex].width}
            height={images[currentImageIndex].height}
            objectFit="contain"
          />
          <button
            className="closeButton"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setIsEnlarged(false)}
          >
            Close
          </button>
        </div>
      )}
    </main>
  );
};

export default Ticorporate;
