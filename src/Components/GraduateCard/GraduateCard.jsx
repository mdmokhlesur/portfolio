const GraduateCard = ({ year, title, subTitle, description }) => {
  return (
    <div className="timeline-item relative border-l border-zinc-200 pl-6" data-aos="fade-up">
      <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-sm bg-red-600 ring-4 ring-red-100"></span>
      <span className="date-pill inline-block rounded-md px-3 py-1.5 text-xs font-semibold uppercase">
        {year}
      </span>
      <h3 className="timeline-title pt-5 font-semibold capitalize text-base-content">{title}</h3>
      <h4 className="accent-text mt-2 font-medium capitalize">{subTitle}</h4>
      {description && <p className="mt-3 text-sm leading-7">{description}</p>}
    </div>
  );
};

export default GraduateCard;
