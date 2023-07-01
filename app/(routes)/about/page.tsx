import content from '../../_api/about.json'
import Minimap from './Minimap'
import Link from 'next/link';

interface HeaderProps {
  title: string;
  paragraph: string;
}

interface ListItem {
  [key: string]: string;
}

interface ListProps {
  title: string;
  list: ListItem[];
  primary?: number[];
}

export async function generateMetadata(){
  const { title, description, viewport, robots, charset } = content.metadata;
  return{
    title,
    description,
    viewport,
    robots,
    charset
  }
}


function Header({ title, paragraph }: HeaderProps) {
  const titleLines: string[] = title.split('\n')
  const paragraphLines: string[] = paragraph.split('\n')

  return (
    <header className='flex flex-col gap-40'>
      <h1 className='flex flex-col text text-8xl font-serif'>
        {titleLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </h1>

      <p className='flex flex-col gap-10 text-3xl leading-10'>
        {paragraphLines.map((line, index) => (
          <div key = {index}>{line}</div>
        ))}
      </p>
    </header>
  );
}

const DynamicList: React.FC<ListProps> = ({ title, list, primary = [1] }) => {
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

const CertList: React.FC<ListProps> = ({ title, list }) => {
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

const ExpList: React.FC<ListProps> = ({ title, list }) => {
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

const ContactList: React.FC<ListProps> = ({ title, list }) => {
  return (
    <section className='flex flex-col gap-8'>
      <h1 className='text-3xl'>{title}</h1>
      <ul className='px-10 flex flex-col gap'>
        {list.map((item, index) => (
          <li key={index}>
            <Link href = {item.href} className='text-normal text-neutral-400'>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Content = () => {
  const header = content.header
  const main = content.main
  const footer = content.footer
  return(
    <article className='w-3/5 h-full flex flex-col gap-40 font-normal'>
      <Header title={header.title} paragraph={header.paragraph}/>
      <CertList title = {main.certification.title} list={main.certification.list}/>
      <ExpList title = {main.work.title} list={main.work.experience} primary={[1,2]}/>
      <ContactList title = {footer.contact.title} list={footer.contact.socials}/>
    </article>
  )
}

export default function About (){
  return(
    <div className='flex w-screen h-full py-60 px-24'>
      <Minimap/>
      <Content/>
    </div>
  )
}