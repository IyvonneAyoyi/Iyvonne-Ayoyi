import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-cyan-500/10 bg-white/[0.03] backdrop-blur-sm",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn("p-6 pb-3", className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn("font-bold text-lg text-white leading-snug", className)} {...props}>
      {children}
    </h3>
  )
}