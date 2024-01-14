import React from 'react';
import img1 from './assets/board-images/1.jpg';
import img2 from './assets/board-images/2.jpg';
import img3 from './assets/board-images/3.jpg';
import img4 from './assets/board-images/4.jpg';
import './styles/Board.css';

export default function Board() {
  return (
    <div
      className="p-dynamic text-lg sm:text-xl !leading-relaxed"
      style={{
        fontFamily: ['Inter', 'sans-serif'],
      }}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex items-center">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <img
                className="rounded-md shadow-md w-full"
                src={img1}
                alt="hackharvard board"
              />
            </div>
            <img
              className="rounded-md shadow-md w-full"
              src={img2}
              alt="hackharvard board"
            />
            <img
              className="rounded-md shadow-md w-full"
              src={img3}
              alt="hackharvard board"
            />
            <img
              className="rounded-md shadow-md w-full"
              src={img4}
              alt="hackharvard board"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div>
              <div className="inline-block border-b-3 border-black">
                <h1 className="text-3xl font-bold">
                  Join the HackHarvard Board!
                </h1>
              </div>
              <p className="mt-2 mb-4">
                HackHarvard is a 36-hour programming marathon where over 500
                students from around the world come to Harvard&apos;s campus and
                use computers to turn ideas into reality. The event features
                mentorship, workshops, food, and prizes. By being on the
                HackHarvard Board, you will have the opportunity to organize
                Harvard&apos;s largest international hackathon!
              </p>
            </div>
            <div className="flex sm:justify-start justify-center">
              <a
                className="!rounded px-3 py-2 bg-blue-200 text-blue-700 hover:text-blue-700 hover:bg-blue-300 transition-colors duration-200 font-bold tracking-wide flex items-center gap-2 no-underline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7_GN0ZAB-zLUVEm1F68mi2EYlQRE1Gj0TX6fLA-rKAIjvxQ/viewform?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                <span>Apply to Lead HackHarvard!</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-10 relative video-test">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Y7dsxjKpSOE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

      </div> */}

      <div>
        <div style={{ marginTop: 50 }} className="container">
          <h1>Comp Process and Timeline</h1>
        </div>

        <div className="timeline">
          <div className="timeline-item timeline-item-left">
            <div className="timeline-item-content">
              <span className="timeline-item-date">February</span>
              <p className="timeline-item-desc">
                Applications to be a HackHarvard subteam director open at
                {' '}
                <a href="https://hackharvard.io/board">hackharvard.io/board</a>
              </p>
            </div>
          </div>
          <div className="timeline-item timeline-item-left">
            <div className="timeline-item-content">
              <span className="timeline-item-date">May 1st</span>
              <p className="timeline-item-desc">
                Applications to join the general board open at
                {' '}
                <a href="https://hackharvard.io/board">hackharvard.io/board</a>
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <span className="timeline-item-date">May 15th</span>
              <p className="timeline-item-desc">General applications close. We will not be accepting late applications.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <span className="timeline-item-date">May 15th - May 31st</span>
              <p className="timeline-item-desc">30 minute interview with one or more directors. We are looking for individuals with boundless energy, infectious enthusiasm, and a wealth of innovative ideas to become part of our HackHarvard board. We encourage you to bring ideas you have for HackHarvard to the interview!</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <span className="timeline-item-date">June 1st - August 25th</span>
              <p className="timeline-item-desc">Biweekly board zoom meetings and asynchronous subteam work. Work should be pretty minimal, but do expect to put in an hour or two a week during the summer.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <span className="timeline-item-date">August 25th - October 20th</span>
              <p className="timeline-item-desc">Weekly 1-1.5 hour board meetings. Also expect 1-2 hours of asynchronous work outside of these meetings. Work will significantly ramp up the week before the hackathon (up to 5 hours a week).</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <span className="timeline-item-date">Mid-october (TBA)</span>
              <p className="timeline-item-desc">Hackathon weekend! All board members should be completely free this weekend. All board members must complete at least one 4 hour night shift.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ marginTop: 50 }} className="container">
        <h1>Subteams</h1>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold">Logistics</h3>
        <ul className="p-0">
          <Li>
            Read and evaluate hacker applications and send out acceptance
            decisions
          </Li>
          <Li>
            Email communication with hackers who have questions about their
            application and hackathon logistics
          </Li>
          <Li>Secure the venue for the hackathon</Li>
          <Li>
            Work with MLH (Major League Hacking) to make HackHarvard an official
            hackathon
          </Li>
        </ul>
        <h3 className="text-2xl font-bold mt-10">
          Marketing and Design
        </h3>
        <ul className="p-0">
          <Li>
            Implement marketing strategies to reach an international audience.
            Last year, our marketing efforts resulted in over 2000 applications.
          </Li>
          <Li>Work with tech team to design HackHarvard website and portal</Li>
          <Li>Create content for and during the event</Li>
          <Li>Design official event graphics and merchandise</Li>
        </ul>
        <h3 className="text-2xl font-bold mt-10">
          Hacker Experience
        </h3>
        <ul className="p-0">
          <Li>Secure awesome speakers like Randi Zuckerberg</Li>
          <Li>
            Plan coding workshops that allow hackers to learn new technical
            skills that they can apply to their own hackathon projects
          </Li>
          <Li>
            Organize fun hackathon activities like a Bob Ross painting event,
            speed typing competition, and puppy petting
          </Li>
        </ul>
        <h3 className="text-2xl font-bold mt-10">Tech</h3>
        <ul className="p-0">
          <Li>
            Build and maintain the HackHarvard website (we have a new website
            design every year)
          </Li>
          <Li>
            Create features for the new HackHarvard portal, which provides a
            streamlined application process for hackers, and also allows hackers
            to connect with each other before and during the event
          </Li>
          <Li>
            Explore new projects to improve hackathon organization process, like
            creating a digital card as a mobile app for check-in
          </Li>
        </ul>
        <h3 className="text-2xl font-bold mt-10">Finance</h3>
        <ul className="p-0">
          <Li>
            Secure sponsorships ($$$) and prizes for the hackathon. Last year,
            we received over $25K in sponsorship money from companies like Meta
            and HRT.
          </Li>
          <Li>Get HUA funding for the board and hackathon</Li>
          <Li>
            Plan and budget fun internal HackHarvard team events like our annual
            team retreat
          </Li>
        </ul>
      </div> */}

      {/* <div style={{ marginTop: 50 }} className="container">
        <h1>Community</h1>
      </div> */}

      {/* <div style={{ marginBottom: 50 }}>
        <p>
          These pictures speak for themselves. One of the best parts about being
          on the board is the incredible sense of community that comes with it. From
          skiing trips to travel adventures, picnics to parties, and enjoying sushi
          together, the board members form a close-knit group that shares a passion
          for fun and friendship. Joining the board opens up opportunities to connect
          with a diverse group of individuals and create lifelong memories, all while
          contributing to a common goal and making a positive impact.

        </p>
      </div>

      <div className="gallery">
        {
          ['boda.jpg',
            'IMG_0289.jpg',
            'beach.jpeg',
            'IMG_1431.JPG',
            'IMG_2518.JPG',
            'jump.jpeg',
            'IMG_3733.JPG',
            'IMG_6536.jpeg',
            'party.jpeg',
            'line.jpeg',
            'picnic.jpeg',
          ].map((imageName) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/alt-text, import/no-dynamic-require, global-require
            <img key={imageName} src={require(`./boardPhotos/${imageName}`)} style={{ maxWidth: 400 }} />
          ))
        }
      </div> */}

    </div>
  );
}

function Li({ children }) {
  return (
    <li className="flex mt-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 mt-[0.15rem] mr-3"
      >
        <line x1="7" y1="7" x2="17" y2="17" />
        <polyline points="17 7 17 17 7 17" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
