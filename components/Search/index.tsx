import Icon from "@/components/Icon"

export default function Search() {
  return (
    <div className='flex justify-center items-center align-middle w-9 h-9 cursor-pointer rounded-full border border-1 border-zinc-300 hover:border-brand-600'>
      <Icon className="pl-1" src='search' size={16} />
    </div>
  )
}
