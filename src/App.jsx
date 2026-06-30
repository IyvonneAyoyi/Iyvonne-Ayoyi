import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Badge Test</h1>
      <div className="flex gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </div>
  )
}

export default App