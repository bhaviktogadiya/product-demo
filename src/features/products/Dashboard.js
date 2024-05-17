import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const handelLogout = () => {
        localStorage.clear()
        navigate("/")
    }
    return(
        <div>
            <button
            onClick={handelLogout}
            >Logout</button>
        </div>
    )
}
export default Dashboard; 