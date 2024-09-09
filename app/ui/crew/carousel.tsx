type Props = { className: string }

export default function Carousel({ className }: Props) {
  return (
    <div className={`${className} flex gap-4 lg:gap-10`}>
      <div className="h-[10px] w-[10px] rounded-full bg-slate-600 lg:h-4 lg:w-4" />
      <div className="h-[10px] w-[10px] rounded-full bg-slate-600 lg:h-4 lg:w-4" />
      <div className="h-[10px] w-[10px] rounded-full bg-slate-600 lg:h-4 lg:w-4" />
      <div className="h-[10px] w-[10px] rounded-full bg-slate-600 lg:h-4 lg:w-4" />
    </div>
  )
}
