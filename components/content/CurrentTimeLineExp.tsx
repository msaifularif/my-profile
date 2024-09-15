import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://hattasoftware.id/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>PT Inspirasi Mandiri Inovasi</a> | Agustus. 2023 - {calculateDuration('2023-08-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
          {/* Frontend development and maintenance of projects implementing agile methodologies (Kanban in Jira) and best practices such as SOLID principles, pixel perfect, clean architecture, clean code using Jira, SCRUM practices, Git, GitFlow practices, Bitbucket, HTML, CSS, Pug, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Zustand, Jest and using microfrontends and Storybook to facilitate the use of reusable components. */}
          As a Programmer at PT Inspirasi Mandiri Inovasi in Surabaya, East Java, Indonesia, I've been contributing full-time since August 2023. My expertise spans both front-end and back-end development, with skills in User Interface Design, User Experience (UX), CSS, Go, HTML, PHP, MySQL, Angular, and PrimeNG. In this on-site role, I leverage my diverse skill set to create innovative, user-friendly web applications, combining technical proficiency with design sensibility to deliver high-quality solutions that meet client needs and industry standards.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>CV Prosini Media Utama | Oct. 2022 - Jul. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          {/* Design and development of web pages applying agile methodologies, clean architecture, SOLID principles and pixel perfect in all projects, I have developed almost all types of projects from Landing pages, stores, blogs and dashboards. */}
          As a full-time Programmer at Prosini Media Utama in Surabaya, East Java, Indonesia from October 2022 to July 2023, I focused on developing and testing programs using Angular and Golang. My responsibilities included implementing and deploying software across various platforms, from mobile to desktop. I utilized a diverse skill set encompassing Ionic Framework, User Interface Design, Front-End Development, CSS, JavaScript, Go, HTML, PHP, MySQL, User Experience Design (UED), Angular, and PrimeNG. This role allowed me to contribute to the full development lifecycle, from concept to deployment, ensuring high-quality, cross-platform applications that met user needs and technical specifications.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title><a href='https://inalead.id/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>PT Indonesia Pemimpin Inovasi</a> | Dec. 2019 - Dec. 2021</TimelineEvent.Title>

        <TimelineEvent.Description>
          {/* Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code. */}
          As an Information Technology Support Specialist at PT Indonesia Pemimpin Inovasi (INALEAD) in Surabaya, East Java, Indonesia, from December 2019 to December 2021, I played a key role in managing future development plans for the company's digital products. My responsibilities included developing technology solutions for company needs and collaborating with clients on website development projects. I created a diverse range of platforms, including landing pages, company profile websites, e-learning systems, and internal management web applications. Utilizing my skills in WordPress and User Interface Design, I contributed to enhancing the company's digital presence and streamlining internal processes. This two-year tenure allowed me to gain extensive experience in both technical development and client collaboration, furthering INALEAD's innovative digital initiatives.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;