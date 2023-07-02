type DescriptionProps = {
  description: string;
};
export default function Description({description} : DescriptionProps){
  return (
    <p className="lg:text-2xl text-xl px-8 text-center w-full lg:w-3/5 leading-tight tracking-wide inter font-light">{description}</p>
  )
}
