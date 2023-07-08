import React from 'react';
import Header from '@/app/_component/about/Header';
import { CertList, ExpList, ContactList, SkillList } from '@/app/_component/about/Lists';

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

const Content: React.FC<ContentProps> = ({ content }) => {
  const { header, main, footer } = content;
  return (
    <article className="col-start-2 col-span-2 w-full h-full flex flex-col gap-20 lg:gap-40 py-60 font-normal">
      <Header {...header} />
      <CertList {...main.certification} />
      <ExpList {...main.work} primary={[1, 2]} />
      <SkillList {...main.skills} />
      <ContactList {...footer.contact} />
    </article>
  );
};

export default Content;
