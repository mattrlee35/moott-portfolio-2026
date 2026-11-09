import React from 'react';

const DEVICON = 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons';

const experience = [
  { role: 'Front End Web Developer', org: 'Key RE Solutions', dates: 'December 2023 - Present' },
  { role: 'Full Stack Web Developer', org: 'Freelance', dates: 'January 2021 - Present' },
];

const education = [
  { role: 'B.S. in Computer Science', org: 'Southern New Hampshire University', dates: 'Graduated November 2020' },
];

const skills = [
  { name: 'Javascript', icon: 'https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png' },
  { name: 'Java', icon: `${DEVICON}/java/java-original.svg` },
  { name: 'C++', icon: `${DEVICON}/cplusplus/cplusplus-plain.svg` },
  { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
  { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
  { name: 'Nuxt JS', icon: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
  { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-plain.svg` },
  { name: 'Github', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', invert: true },
  { name: 'AWS', icon: 'https://i.imgur.com/IABPuCS.png' },
  { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
  { name: 'Django', icon: 'https://i.imgur.com/I4DdbRo.png' },
  { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: 'RaspberryPi', icon: `${DEVICON}/raspberrypi/raspberrypi-original.svg` },
  { name: 'PHP', icon: `${DEVICON}/php/php-plain.svg` },
  { name: 'Kotlin', icon: `${DEVICON}/kotlin/kotlin-original.svg` },
  { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
  { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
  { name: 'Vue.js', icon: `${DEVICON}/vuejs/vuejs-original.svg` },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
];

function TimelineGroup({ title, items }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.role + item.org} className="p-5 rounded-2xl border border-slate-900 bg-slate-950/40">
            <div className="text-base font-bold text-white">{item.role}</div>
            <div className="text-sm text-emerald-400 font-medium">{item.org}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">{item.dates}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-16">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              About <span className="text-emerald-400">Me</span>
            </h2>
            <div className="h-1 w-12 bg-emerald-400 rounded-full" />
          </div>

          <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
            Welcome! I'm Matt Lee, from Aurora, Illinois. I finished up my high school years at West Aurora High School in May 2010. After that, I enrolled at Waubonsee Community College in the Fall of 2010, aiming for an associate degree in Mathematics. However, life took an unexpected turn, and I had to put my degree on hold to take care of my parents. This break gave me some time to figure out my career path.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-light">
            During this break, I stumbled upon my true passion: computer programming. So, I resumed my studies at Waubonsee Community College in the Fall of 2014, taking things slow with a half-time course load, and delving into the world of Computer Science. In the Fall of 2018, I decided to take the plunge and enrolled at Southern New Hampshire University. By the Summer of 2020, I had managed to earn my Bachelor's Degree in Computer Science, specializing in Software Engineering.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-light">
            My interest in Computer Science has a meaningful foundation: my family background. My mom has spent most of her career as a Director of Business Administration. I remember sitting on her lap, listening in as she discussed various work matters with her colleagues. These conversations covered everything from customer retention strategies to providing feedback to executives and handling licensing issues. Those early experiences gave me a solid introduction to computers and software, ultimately leading me to pursue a career in Computer Science.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-light">
            Currently, I'm working part time as a freelance full stack web developer and for Key RE Solutions to help develop and maintain their website.
          </p>
        </div>

        <div className="flex-1 lg:max-w-sm w-full space-y-8">
          <TimelineGroup title="Experience" items={experience} />
          <TimelineGroup title="Education" items={education} />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              tabIndex={0}
              className="group relative flex items-center justify-center p-4 rounded-2xl border border-slate-900 bg-slate-950/40 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:-translate-y-0.5 focus:outline-none focus-visible:border-emerald-500/30 transition-all duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                className={`w-10 h-10 object-contain ${skill.invert ? 'invert' : ''}`}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-slate-100 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-200 z-20"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
