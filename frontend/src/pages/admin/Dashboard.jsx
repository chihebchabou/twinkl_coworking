import { Card } from "flowbite-react"

const Dashboard = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Card onClick={e => e.preventDefault()} className="cursor-pointer border-none max-w-full bg-blue-500 dark:bg-blue-600 hover:opacity-75">
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Profile
        </h5>
      
      </Card>
      <Card onClick={e => e.preventDefault()} className="cursor-pointer border-none  max-w-full bg-orange-500 dark:bg-orange-600 hover:opacity-75">
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Coworking
        </h5>
        
      </Card>
      <Card onClick={e => e.preventDefault()} className="cursor-pointer border-none  max-w-full bg-yellow-300 dark:bg-yellow-400 hover:opacity-75">
        <h5 className="text-2xl font-bold tracking-tight text-white">
          Formation
        </h5>
        
      </Card>
    </div>
  )
}

export default Dashboard