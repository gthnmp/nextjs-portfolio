import { SkillList, CertList, ExpList } from "../global/Lists";

export interface MainProps {
  certification: any;
  work: any;
  skills: any;
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