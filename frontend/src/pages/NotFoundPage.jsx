import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-slate-300 space-y-4">
        <p className="text-center text-4xl">404 | Not Found</p>
        <Link to="/" className="text-lg hover:underline">Home Page</Link>
    </div>
  )
}

export default NotFoundPage