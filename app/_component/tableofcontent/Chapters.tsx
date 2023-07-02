import Link from "next/link"
import Title from './Title'
import Description from './Description'

type ChapterProps = {
  id : string, name : string, title : string, description : string, num : number, href : string
}
type PageNumberProps = {
  num: number;
};

export default function Chapters({ id, name, title, description, num, href} : ChapterProps){
  return(
    <section key = {id} id = {name} className='w-screen h-auto flex flex-col justify-center items-center gap-10'>
      <PageNumber num = {num} />
      <Title title = {title} href = {href}/>
      <Description description={description}/>
    </section>
  )
}

const PageNumber = ({num} : PageNumberProps) => (
  <h3 className="font-serif text-base">{num}</h3>
)
