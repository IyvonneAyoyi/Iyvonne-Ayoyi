import { cn } from "@/lib/utils"

export function Button({ className, variant = "default", size = "default", children, ...props }) {
  const variants = {
    default: "bg-cyan-400 text-slate-900 hover:bg-cyan-300 font-bold",
    outline: "border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 bg-transparent",
    ghost: "bg-transparent hover:bg-white/5 text-slate-300",
  }
  const sizes = {
    default: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
    sm: "px-4 py-1.5 text-xs",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold",
        "transition-all duration-200 cursor-pointer",
        "active:scale-[0.98] disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}