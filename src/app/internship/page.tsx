// pages/internship.tsx
import React from 'react';

const Internship: React.FC = () => {
  return (
    <main className="internshipPage">
      <div className="internshipText">
        <h2>BI-development in Kotirinki Oy</h2>
        <p>
          My thesis and internship focused on helping the client (Kotirinki Oy)
          move towards more data-driven management. My work included, among
          other things, mapping the existing systems, creating a development
          plan, exploring different solution options, as well as implementing
          and configuring the system according to the client’s needs.
        </p>
        <h2>Thesis</h2>

        <p>
          The assignment for the thesis came from Kotirinki Oy, which provides
          home and care services for small en trepreneurs. The client's goal is
          to develop knowledge management within the organization. The thesis
          was carried out as developmental research. The aim of the work was to
          become familiar with the data manage ment process and systems of the
          client. To achieve this goal, an analysis of the status of the client
          was car ried out, as well as data sources were surveyed, development
          targets were found from the current status of the information
          management process, and possible systems were brainstormed to improve
          the process.
        </p>
        <h2>Internship</h2>
        <p>
          At the beginning of the internship, the task was to get familiar with
          certain systems, as well as to search for information and prepare a
          presentation that presents different system solutions as options to
          meet the company's needs to utilize data better. After the
          presentation, the system chosen was Metabase, which is an open-source
          BI system.{' '}
        </p>
        <p>
          The next steps were to get familiar with the new system and more
          closely with the databases from which the data was obtained for the
          system. In addition, responses were collected from the managers of
          different departments through a survey to find out what kind of data
          they need to access, monitor, and report. After receiving the survey
          responses, it was time to start building views and simultaneously
          learn to use the new system.
        </p>
        <p>
          Most of the internship period was spent compiling views for different
          departments using the new system. Each department had its own needs,
          and building collections/views required several meetings, as well as
          many mistakes and clarifications about what a specific request meant.
          The company's data structures and previous systems required a lot of
          searching and consideration to get a clear understanding. It is also
          important to note that one of the most crucial features when building
          views was taking history into account, and with this system it was
          possible to create visual and user-friendly views that allow drilling
          into data and comparing, for example, data from different years.
        </p>
        <p>
          In addition to the implementation of the new system, which took up
          most of the internship, the duties also included organizing training
          for the system, providing training, and developing it. Other work
          tasks included helping others, for example, by searching for data for
          them. Additionally, I got to develop a web application, which was a
          refreshing change after a long time to have the opportunity to write
          code. Furthermore, a large part of the internship also involved
          searching for information in different ways so that, in addition to
          databases, data from other systems could also be transferred to the
          new system. In this regard, various tools and possibilities were
          tested.
        </p>
      </div>
      {/* <h1>Tähän selitystä työharkasta ja opparista</h1> */}
    </main>
  );
};

export default Internship;
