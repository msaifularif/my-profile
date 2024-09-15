'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    // id: '1',
    // title: 'Pokédex Vanilla',
    // des: 'Project using the pokeapi api, you can search the pokemons you want.',
    // category: 'javascript',
    // repo: 'https://jeandv.github.io/pokedex',
    // link: 'https://jeandv.github.io/pokedex'
    id: '1',
    title: 'Company Profile - INALEAD',
    des: 'This project involved the development of a company profile website for INALEAD, which stands for Innovation Leader. INALEAD is a company focused on human resource development, with core values of "agile and innovation" embedded in every product. The company is based in Indonesia. The website was built using the WordPress platform, allowing the admin to easily manage content. The features include company information pages, services, portfolio, and a contact form. Additionally, the responsive design ensures optimal display across various devices, both desktop and mobile.',
    category: 'wordpress',
    repo: '#',
    link: 'https://inalead.id/'
  },
  {
    // id: '2',
    // title: 'Memory Game',
    // des: 'This is one of the challenges done in CADIF1 Academy. ',
    // category: 'javascript - jquery',
    // repo: 'https://jeandv.github.io/memoria-game',
    // link: 'https://github.com/jeandv/memoria-game'
    id: '2',
    title: 'Company Profile - GPEI JATIM',
    des: 'This project involved the development of a company profile website for GPEI (Indonesian Exporters Association) East Java, an association that supports export companies in the East Java region. The website was designed using the WordPress platform, enabling efficient and easy content management for administrators. The main features of the website include information about the organization, services, members, as well as access to various important resources for exporters. A responsive design was also implemented to ensure an optimal user experience across different devices, including desktops and mobiles.',
    category: 'wordpress',
    repo: '#',
    link: 'https://jatimexport.org/'
  },
  {
    id: '3',
    title: 'Platform ZISWAF - MITRA ZAKAT',
    des: 'The ZISWAF Mitra Zakat platform is a web application designed to facilitate the digital management of zakat, infaq, sadaqah, and waqf (ZISWAF). The system enables users to make donations easily through various secure payment methods and monitor the transparency of fund distribution in real-time.',
    category: 'angular - go - primeng - mysql',
    repo: '#',
    link: 'https://mitrazakat.id/berbagi/C3PI2'
  },
  {
    id: '5',
    title: 'HATTA SOFTWARE',
    des: 'HATTA SOFTWARE is a product profile website developed for a company focused on providing technology services and solutions specifically for cooperatives. This WordPress-based site is designed to showcase the company`s product portfolio, including various applications and systems that support the digitalization of cooperatives. With a focus on ease of navigation and professional design, the platform leverages the power of WordPress plugins and themes to provide an attractive appearance and functional features. This project is designed to help the company promote its products while enhancing visibility among cooperatives in Indonesia.',
    category: 'wordpress',
    repo: '#',
    link: 'https://hattasoftware.id/'
  },
  {
    id: '6',
    title: 'EduCash',
    des: 'Educash is a WordPress-based product profile website developed to showcase a financial management platform specifically designed for schools and educational institutions, such as Islamic boarding schools, madrasas, courses, and tutoring centers. This website serves as a digital storefront presenting information about the main features of the Educash platform, including payment management, fund tracking, and financial report generation. The project utilizes WordPress to ensure ease of content management and flexibility in development, allowing the company to effortlessly display their products and services to potential customers. With its responsive and user-friendly design, the Educash website ensures an optimal experience for visitors across various devices.',
    category: 'wordpress',
    repo: '#',
    link: 'https://educash.id/'
  },
  // {
  //   id: '7',
  //   title: 'MapBoxApp',
  //   des: 'In this project I learned how to consume the mapbox api and use its different functionalities.',
  //   category: 'typescript - react - axios',
  //   repo: 'https://github.com/jeandv/maps-app',
  //   link: 'https://mapsapp.vercel.app'
  // },
  // {
  //   id: '8',
  //   title: 'Github Issues',
  //   des: 'First project using TanStack Query with Github API, I learned what it is for, how to use it and when to use it.',
  //   category: 'typescript - react - react query',
  //   repo: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main',
  //   link: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main'
  // },
  // {
  //   id: '9',
  //   title: 'MERN Events Ecommerce',
  //   des: 'Event registration app is a project test to evaluate my skills of the MERN stack using Redux and Stripe.',
  //   category: 'react - node - express - mongodb',
  //   repo: 'https://github.com/jeandv/events-test-mern',
  //   link: 'https://github.com/jeandv/events-test-mern'
  // },
  // {
  //   id: '10',
  //   title: 'Ecommerce Challenge',
  //   des: 'I did this challenge with the purpose of learning how to manage a shopping cart and to get to know ChakraUI.',
  //   category: 'typescript - next.js - chakraui',
  //   repo: 'https://github.com/jeandv/basement-challenge',
  //   link: 'https://basement-challenge-jeandv.vercel.app'
  // },
  // {
  //   id: '11',
  //   title: 'Pokédex Next.js (ISR)',
  //   des: 'Search and save your pokémons favs! I learned the use of GetStaticProps, Paths, the Incremental Static Generation and the Regeneration.',
  //   category: 'typescript - next.js - axios',
  //   repo: 'https://github.com/jeandv/pokedex-next',
  //   link: 'https://pokedex-jeandv.vercel.app'
  // },
  // {
  //   id: '12',
  //   title: 'Open Jira',
  //   des: 'MERN project using TypeScript to learn how to do the main functionality of Jira.',
  //   category: 'next.js - node - express - mongodb',
  //   repo: 'https://github.com/jeandv/open-jira',
  //   link: 'https://open-jira-jeandv.vercel.app'
  // },
  // {
  //   id: '13',
  //   title: 'Clon Mercado Libre',
  //   des: 'This is one of the Angular challenges done in CADIF1 Academy.',
  //   category: 'typescript - angular - bootstrap',
  //   repo: 'https://github.com/jeandv/mercadolibre-des4',
  //   link: 'https://mercadolibre-des4.vercel.app'
  // },
  // {
  //   id: '14',
  //   title: 'Cadif1 App',
  //   des: 'This is one of the Ionic challenges done in CADIF1 Academy.',
  //   category: 'typescript - ionic - angular - scss',
  //   repo: 'https://github.com/jeandv/pract-ionic',
  //   link: 'https://www.youtube.com/watch?v=ysIM5sAkdAY'
  // },
  // {
  //   id: '15',
  //   title: 'Electron.js Projects',
  //   des: 'All my projects using Electron.',
  //   category: 'electron.js',
  //   repo: 'https://github.com/jeandv/pract-electronjs',
  //   link: 'https://github.com/jeandv/pract-electronjs'
  // },
  // {
  //   id: '16',
  //   title: 'Node Backend Projects',
  //   des: 'Terminal projects (console), rest servers, api rests, etc.',
  //   category: 'node - express - mongodb',
  //   repo: 'https://github.com/jeandv/pract-nodejs',
  //   link: 'https://github.com/jeandv/pract-nodejs'
  // },
  // {
  //   id: '17',
  //   title: 'JavaScript Algorithms',
  //   des: 'Practice, exercises and algorithmic challenges using JavaScript and TypeScript.',
  //   category: 'javascript - typescript',
  //   repo: 'https://github.com/jeandv/algorithms-js',
  //   link: 'https://github.com/jeandv/algorithms-js'
  // },
  // {
  //   id: '18',
  //   title: 'PHP Ecommerce',
  //   des: 'Freelancer Ecommerce Project using PHP and MySQL database.',
  //   category: 'php - mysql - bootstrap',
  //   repo: 'https://github.com/jeandv/shopphp-paypal',
  //   link: 'https://github.com/jeandv/shopphp-paypal'
  // },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;