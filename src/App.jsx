import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import ContactForm from './components/ContactForm';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ReactGA from 'react-ga4';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'skills', 'projects', 'contact'];
  const [init, setInit] = useState(false);

  const skills = [
    { title: `Python`, icon: `/images/python.svg` },
    { title: `Django`, icon: `/images/django.svg` },
    { title: `Angular`, icon: `/images/angular.svg` },
    { title: `React`, icon: `/images/react.svg` },
    { title: `Vue.js`, icon: `/images/vue.svg` },
    { title: `JavaScript`, icon: `/images/javascript.svg` },
    { title: `HTML`, icon: `/images/html.svg` },
    { title: `CSS`, icon: `/images/css.svg` },
    { title: `TypeScript`, icon: `/images/typescript.svg` },
    { title: `Java`, icon: `/images/java.svg` },
    { title: `PostgreSQL`, icon: `/images/postgresql.svg` },
    { title: `Git`, icon: `/images/git.svg` },
    { title: `NumPy`, icon: `/images/numpy.svg` },
    { title: `Pandas`, icon: `/images/pandas.svg` },
    { title: `Matplotlib`, icon: `/images/chart.svg` },
  ]

  const projects = [
    {
      title: `Personal website`,
      description: `- A portfolio website to showcase my skills and past projects. Built with React and Tailwind CSS.`,
      live_url: `https://my-portfolio-sultan.netlify.app/`, github_url: `https://github.com/sul-otaibi/personal-website`,
      tech: [`React`, `JavaScript`, `CSS`, `Git`]
    },
    {
      title: `Job Application Tracker `, description: `- A Vue.js application designed to help users track their job applications.`, live_url: `https://jats.netlify.app/`, github_url: `https://github.com/sul-otaibi/JATS-remake`,
      tech: [`Vue.js`, `JavaScript`, `CSS`, `Git`]
    },
    {
      title: `School Management System`, description: `- A platform for managing students, teachers, administrators, and courses.`,
      tech: [`Angular`, `TypeScript`, `HTML`,  `CSS`, `Git`]
    },
  ]

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#65c3c8"],
      },
      links: {
        color: "#00484d",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }));

  useEffect(() => {
    ReactGA.initialize(`G-WHH6B2BMZ6`);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {init && <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />}
      <Navbar sections={sections} scrollToSection={scrollToSection} />
      <ProgressBar
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <ToastContainer
        position="top"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="snap-container">
        <section id="home" className="section hero min-h-screen bg-base-300 bg-opacity-25 backdrop-blur-[3px] flex items-center justify-center relative px-6 lg:px-20">
          <div className="relative z-10 min-h-screen hero">
            <div className="hero-content flex-col md:min-h-[75%] gap-16 md:gap-24">
              <div className="card md:min-w-max">
                <div className="w-full h-full p-0 m-0 card-body md:px-4 lg:px-6">
                  <h2 className="text-6xl card-title text-wrap">Sultan Alotaibi</h2>
                  <p className="text-3xl">Software Engineer</p>
                </div>
              </div>
              <div className="md:max-w-[60%] xl:max-w-[50%]">
                <h1 className="text-2xl font-bold">About me</h1>
                <p className="text-lg">
                  As a software engineer with a strong foundation in web development and software engineering,
                  I have developed a wide range of skills across programming languages, frameworks,
                  and development tools. I'm passionate about creating efficient, scalable solutions and constantly
                  learning new technologies to stay ahead in the ever-evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section bg-base-100 bg-opacity-25 backdrop-blur-[2px] flex items-center justify-center relative md:px-11 xl:px-20">
          <div className="relative z-10 max-w-full px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">Skills</h2>
            <div className="flex-wrap justify-center hidden gap-4 md:flex xl:gap-8">
              {skills.map((value, index) => {
                return (
                  <div className="card bg-base-100 card-compact w-40 shadow-xl h-[8.25rem] lg:h-40" key={index}>
                    <figure className="">
                      <img
                        src={value.icon}
                        className="w-20 h-20 pt-4 rounded-xl" />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="card-title">{value.title}</h2>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="max-w-full p-4 space-x-4 carousel carousel-center bg-primary rounded-box md:hidden">
              {skills.map((_, index) => {
                return (
                  <div className="carousel-item" key={index}>
                    <div className="w-56 shadow-xl card bg-base-100 card-compact">
                      <figure className="">
                        <img
                          src={skills[index].icon}
                          className="w-20 h-20 pt-4 rounded-xl" />
                      </figure>
                      <div className="items-center text-center card-body">
                        <h2 className="card-title">{skills[index].title}</h2>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section bg-base-300 bg-opacity-25 backdrop-blur-[3px] flex items-center justify-center relative md:px-11 lg:px-20">
          <div className="relative z-10 px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">Projects</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {projects.map((project, index) => {
                return (
                  <div className="card card-compact w-[22rem] sm:w-96 bg-base-100 shadow-xl" key={index}>
                    <div className="card-body">
                      <h2 className="card-title md:text-2xl">{project.title}</h2>
                      <p className="text-lg text-left">{project.description}</p>
                      <div className='flex justify-between gap-2'>
                        <div className='flex justify-start'>
                          {project.tech.map((tech, index) => {
                            return (
                              <img src={skills.find((s) => s.title === tech)?.icon} className='w-7' key={index} />
                            )
                          })}
                        </div>
                        <div className="justify-end join">
                          {project.live_url && <div className="justify-end card-actions">
                            <a href={project.live_url}><button className="px-1 btn btn-sm btn-outline btn-primary md:px-4 join-item">Live version</button></a>
                          </div>}
                          {project.github_url && <div className="justify-end card-actions">
                            <a href={project.github_url}><button className="px-1 btn btn-sm btn-outline btn-primary md:px-4 join-item">Github repo</button></a>
                          </div>}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section flex bg-base-100 bg-opacity-25 backdrop-blur-[2px] items-center justify-center relative">
          <div className="relative z-10 px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">Contact Me</h2>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;