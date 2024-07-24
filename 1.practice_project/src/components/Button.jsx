import { twMerge } from  'tailwind-merge'

const Button = ({isOutline, icon, text, className, ...rest}) => {
  return (
    <button
    {...rest}
    className={twMerge('px-4 py-3 bg-black text-white rounded-md flex items-center gap-2 min-w-56 text-base justify-center cursor-pointer', 
      isOutline&& 'outline outline-black text-black w-full bg-white' , className)}>
        {icon}  
        {text}
    </button>
  )
}

export default Button
