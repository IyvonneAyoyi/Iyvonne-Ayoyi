import { cn } from "@/lib/utils"

export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    secondary: "bg-white/5 text-slate-300 border border-white/10",
    outline: "border border-cyan-500/30 text-cyan-400",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}