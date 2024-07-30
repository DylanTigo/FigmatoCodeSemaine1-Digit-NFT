

export default function Button({ children} : { children: React.ReactNode}) {
  return (
    <button type="button" className="px-[26px] py-[10px] bg-neutral-800 text-white rounded-full">{children}</button>
  )
}
