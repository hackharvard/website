import React from 'react';
import code from './assets/2022/code.jpg';
import merch from './assets/2022/merch.jpg';
import food from './assets/2022/food.jpg';
import work from './assets/2022/work.jpg';
import design from './assets/2022/design.jpg';
import mentors from './assets/2022/mentors.jpg';
import speaker from './assets/2022/speaker.jpg';
import sleep from './assets/2022/sleep.jpg';
import friends from './assets/2022/friends.jpg';


export default function Wtf() {
  return (
    <div class="min-h-screen p-8 text-white"
      // set to 
      style={{ backgroundColor: '#090229' }}
    >
      <div class="mx-auto max-w-4xl">
        <h1 class="mb-4 font-exo text-5xl font-bold sm:text-7xl">wtf is a hackathon?!</h1>

        <p class="mb-6 text-lg">
          Welcome to the exciting world of hackathons! A hackathon is a creative, fast-paced event where
          individuals come together to collaborate, innovate, and build awesome projects in a short
          amount of time. At HackHarvard, you have 36 hours to create something amazing!
        </p>

        <img src={code} alt="Hackathon Image" class="mb-6 rounded-lg shadow-lg" />

        <p class="mb-6 text-lg">
          At HackHarvard, we're all about providing you with an unforgettable experience. Imagine a
          weekend filled with free food, stylish merchandise, and the chance to win exciting prizes!
        </p>

        <img src={merch} alt="Merch Image" class="mb-6 rounded-lg shadow-lg" />

        <img src={food} alt="Food Image" class="mb-6 rounded-lg shadow-lg" />

        <p class="mb-6 text-lg">
          Whether you're a coding newbie or a seasoned pro, our hackathon offers something for everyone.
          We provide workshops tailored for beginners, so you can dive into the world of coding and
          development with ease.
        </p>

        <img src={work} alt="Work Image" class="mb-6 rounded-lg shadow-lg" />

        <p class="mb-6 text-lg">
          The world of tech is incredibly interdisciplinary, welcoming skills like design, project
          management, presentation, and more. You don't even need to know how to code – there's a place
          for everyone!
        </p>

        <img
          src={design}
          alt="Interdisciplinary Image"
          class="mb-6 rounded-lg shadow-lg"
        />

        <p class="mb-6 text-lg">
          Don't worry if you're feeling stuck or need guidance – our mentors are here to help you every
          step of the way. They're experienced hackers who can offer insights, advice, and support.
        </p>

        <img src={mentors} alt="Mentor Image" class="mb-6 rounded-lg shadow-lg" />

        <p class="mb-6 text-lg">
          Get ready to be inspired by industry speakers who will share their knowledge and experiences.
          This is your chance to gain valuable insights and network with professionals.
        </p>

        <img src={speaker} alt="Speaker Image" class="mb-6 rounded-lg shadow-lg" />

        <p class="mb-6 text-lg">
          Worried about sleep? No need! We've got cozy sleeping areas where you can catch some Z's and
          recharge so you can keep on hacking.
        </p>

        <img src={sleep} alt="Sleeping Area Image" class="mb-6 rounded-lg shadow-lg" />

        <p class="mb-6 text-lg">
          Beyond the prizes and workshops, HackHarvard is a fantastic opportunity to meet like-minded
          individuals. Collaborate, make friends, and potentially find your next co-founder.
        </p>

        <img src={friends} alt="Networking Image" class="mb-6 rounded-lg shadow-lg" />

        <p class="text-lg">
          So, are you ready to embark on a journey of innovation, learning, and fun? Join us at
          HackHarvard and experience the magic of hacking firsthand!
        </p>
      </div>
    </div>

  );
}