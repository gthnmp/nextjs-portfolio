import React from 'react';
import Header from '@/app/_component/about/Header';
import { CertList, ExpList, ContactList, SkillList } from '@/app/_component/about/Lists';
import Link from 'next/link';

interface ContentProps {
  content: {
    header: any;
    main: {
      certification: any;
      work: any;
      skills:any;
    };
    footer: {
      contact: any;
    };
  };
}

type NextPageProps = {
  alignment?: 'text-left' | 'text-center' | 'text-right';
  chapterNumber : string | number;
  href: string;
  children: React.ReactNode;
};

const NextPage: React.FC<NextPageProps> = ({ alignment = 'text-center', chapterNumber, children, href }) => {
  const classes = `flex flex-col text text-5xl lg:text-8xl font-serif next-page-title justify-center items-center`;

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <span className='text-base'>{chapterNumber}</span>
      <span className='font-sans text-2xl uppercase'>Gathan Mahesa</span>
      <Link href={href} className={classes}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className='line overflow-hidden pb-3 px-3'>
            <h1 data-content={child}>
              {child}
            </h1>
          </div>
        ))}
      </Link>
    </div>
  );
};


const Content: React.FC<ContentProps> = ({ content }) => {
  const { header, main, footer } = content;
  return (
    <article className="w-full lg:w-3/5 h-full flex flex-col gap-20 lg:gap-40 py-60 font-normal">
      <Header {...header} />
      <CertList {...main.certification} />
      <ExpList {...main.work} primary={[1, 2]} />
      <SkillList {...main.skills} />
      <ContactList {...footer.contact} />
      <NextPage href ={"/project"} chapterNumber={"02"}>{["Selected", "Project"]}</NextPage>
    </article>
  );
};

export default Content;
