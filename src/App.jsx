import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>Card Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400 text-sm mb-4">
            This is a test card to confirm the Card component works correctly with Tailwind styling.
          </p>
          <Button>Click Me</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App