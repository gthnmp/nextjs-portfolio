import React from 'react';
import Header from '@/app/_component/about/Header';
import { CertList, ExpList, ContactList } from '@/app/_component/about/Lists';

interface ContentProps {
  content: {
    header: any;
    main: {
      certification: any;
      work: any;
    };
    footer: {
      contact: any;
    };
  };
}

const Content: React.FC<ContentProps> = ({ content }) => {
  const { header, main, footer } = content;
  return (
    <article className="w-full lg:w-3/5 h-full flex flex-col gap-20 lg:gap-40 py-60 font-normal">
      <Header {...header} />
      <CertList {...main.certification} />
      <ExpList {...main.work} primary={[1, 2]} />
      <ContactList {...footer.contact} />
    </article>
  );
};

export default Content;
