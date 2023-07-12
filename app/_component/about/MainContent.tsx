import { SkillList, CertList, ExpList } from "../global/Lists";

type CertListType = {
  name:string;
  issuer:string;
  date:string
}

type WorkListType = {
  jobTitle:string;
  place:string;
  date:string
}

export interface MainProps {
  certification: {
    title : string;
    list : CertListType[]
    primary? : number | number[]
    secondary? : number | number[]
  };
  work: {
    title : string;
    list : WorkListType[]
    primary? : number | number[]
    secondary? : number | number[]
  };
  skills: {
    title : string;
    list : string[]
  };
}

const Main: React.FC<MainProps> = ({ certification, work, skills }) => {
  return (
    <main className="flex flex-col px-8 gap-20 lg:gap-40">
      <CertList {...certification} />
      <ExpList {...work} />
      <SkillList {...skills} />
    </main>
  );
};

export default Main