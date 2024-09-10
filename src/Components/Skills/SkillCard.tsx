function SkillCard(props: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 text-2xl rounded-md h-44 bg-gray-50 drop-shadow-xl w-full">
      <img src={`images/${props.icon}.svg`} className="w-12" />
      <p>{props.name}</p>
    </div>
  );
}

export default SkillCard;
