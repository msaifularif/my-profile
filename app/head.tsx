'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Saiful Arif ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Saiful Arif I'm from Indonesia and I have +4 year of work experience in JavaScript and React, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 19. I love what I do and I help others with what I can, I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron implementing good practices, clean architecture, pixel perfect and agile methodologies.`,
    keywords: 'Saiful Arif, msaifularif, saifularif, M Saiful Arif, Saiful Arif portafolio, Saifularif portafolio, msaifularif portfolio, saiful portfolio, saifularif github, Saiful Arif github, Saiful Arif LinkedIn, M Saiful Arif LinkedIn, Web, web developer, Programador web, web desain, uiux web, application web, uiux desain, uiux, desainer frontend, programmer frontend, HTML, CSS, Javascript, Typescript, React, Angular.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      {/* <meta property='og:url' content={`https://jeandv.vercel.app${pathname}`} />
      <link rel='canonical' href={`https://jeandv.vercel.app${pathname}`} /> */}
      <meta property='og:url' content={`https://saifularif.my.id${pathname}`} />
      <link rel='canonical' href={`https://saifularif.my.id${pathname}`} />
      <link rel='me' href='mailto:saifularif.dev@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Saiful Arif' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@msaifula_' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;