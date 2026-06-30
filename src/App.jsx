import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Button Test</h1>
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-4 mt-2">
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}

export default App