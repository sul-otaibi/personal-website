function SkillCard(props: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-56 h-40 gap-2 p-4 text-2xl rounded-md bg-gray-50 drop-shadow-xl">
      <img src={`images/${props.icon}.svg`} className="w-12" />
      <p>{props.name}</p>
    </div>
  );
}

export default SkillCard;
