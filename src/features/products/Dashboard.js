import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const handelLogout = () => {
        localStorage.clear()
        navigate("/Login")
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