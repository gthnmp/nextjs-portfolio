import Link from "next/link";

interface ListItem {
  [key: string]: string;
}

interface ListProps {
  title?: string;
  list: ListItem[];
}

export const CertList: React.FC<ListProps> = ({ title, list }) => {
  return (
    <section className='flex flex-col gap-8'>
      <h1 className='lg:text-3xl text-xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap-5 lg:gap-10'>
        {list.map((item, index) => (
          <li key={index} className='flex flex-col gap-2'>
            <span className='primary lg:text-3xl text-xl'>{item.name}</span>
            <div className="secondary flex flex-col text-normal text-neutral-400">
              <span>{item.issuer}</span>
              <span>{item.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const ExpList: React.FC<ListProps> = ({ title, list }) => {
  return (
    <section className='flex flex-col gap-8'>
      <h1 className='lg:text-3xl text-xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap-5 lg:gap-10'>
        {list.map((item, index) => (
          <li key={index} className='flex flex-col gap-2'>
            <div className='primary flex flex-col lg:text-3xl text-xl'>
              <span>{item.jobTitle}</span>
              <span>{item.place}</span>
            </div>
            <span className='secondary text-normal text-neutral-400'>{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const SkillList = ({ title, list } : {title : string, list : string[]}) => {
  return (
    <section className='flex flex-col gap-8'>
      <h1 className='lg:text-3xl text-xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap'>
        {list.map((item, index) => (
          <li key={index}>
            <h2 className='secondary text-normal pointer-events-none f-gray-200'>{item}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const ContactList: React.FC<ListProps> = ({ title = "", list }) => {
  return (
    <section className='flex flex-col gap-8'>
      <h1 className='lg:text-3xl text-xl'>{title}</h1>
      <ul className=' grid auto-cols-max w-full  
        grid-cols-2 gap-x-8 gap-y-2
        lg:grid-cols-1 lg:px-10 lg:gap-y-0
      '>
        {list.map((item, index) => (
          <li key={index}>
            <Link href = {item.href} className='secondary text-normal text-neutral-400  hover:text-gray-600 f-gray-200'>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
