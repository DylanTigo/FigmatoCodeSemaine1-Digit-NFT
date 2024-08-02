import { useRef } from "react"


export default function Button({ children, variant } : { children: React.ReactNode, variant?: "secondary"}) {

  const buttonRef = useRef(null)

  
  if (variant === "secondary") {
    return <button ref={buttonRef} type="button" className="px-[26px] py-[10px] bg-white text-neutral-800 rounded-full">{children}</button>
  }
  return (
    <button ref={buttonRef} type="button" className="px-[26px] py-[10px] bg-neutral-800 text-white rounded-full">{children}</button>
  )
}
