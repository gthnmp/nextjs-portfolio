import Link from "next/link";

interface ListItem {
  [key: string]: string;
}

interface ListProps {
  title: string;
  list: ListItem[];
  primary?: number[];
}


export const DynamicList: React.FC<ListProps> = ({ title, list, primary = [1] }) => {
  return (
    <section className='flex flex-col gap-5'>
      <h1 className='text-3xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap-10'>
        {list.map((item, index) => (
          <li key={index} className='flex flex-col gap-1'>
            {Object.entries(item).map(([key, value], i) => (
              <p key={key} className={`${primary.includes(i + 1) ? "text-3xl" : "text-normal text-neutral-400"}`}>
                {value}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};

export const CertList: React.FC<ListProps> = ({ title, list }) => {
  return (
    <section className='flex flex-col gap-8'>
      <h1 className='text-3xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap-10'>
        {list.map((item, index) => (
          <li key={index} className='flex flex-col gap-2'>
            <span className='text-3xl'>{item.name}</span>
            <div className="flex flex-col text-normal text-neutral-400">
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
      <h1 className='text-3xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap-10'>
        {list.map((item, index) => (
          <li key={index} className='flex flex-col gap-2'>
            <div className='flex flex-col text-3xl'>
              <span>{item.jobTitle}</span>
              <span>{item.place}</span>
            </div>
            <span className='text-normal text-neutral-400'>{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const ContactList: React.FC<ListProps> = ({ title, list }) => {
  return (
    <section className='flex flex-col gap-8'>
      <h1 className='text-3xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap'>
        {list.map((item, index) => (
          <li key={index}>
            <Link href = {item.href} className='text-normal text-neutral-400  hover:text-gray-600 dark:hover:text-gray-200'>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
