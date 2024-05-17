import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../../config/index";

const Login  = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },

        validate: (values) => {
            // console.log(values, "=======here");
            let errors = {}
            if (!values.email) {
                errors.email = "please enter email"  
            }
            if (!values.password) {
                errors.password = " please enter password"
            }
            // console.log(errors);
            return errors
        },

        onSubmit: (values) => {
            try{
                console.log(values);
                console.log(ENDPOINT);
                axios.post(`${ENDPOINT}/auth/login`,{
                    username: values.email,
                    password: values.password,
                }).then(res => {
                    // console.log(res);
                    if (res?.status == 200 && res?.data?.token) {
                        localStorage.setItem('token', res?.data?.token)
                        localStorage.setItem('userData', JSON.stringify(res?.data))
                        navigate("/")
                    }
                }).catch(err => {
                    console.log(err);
                })
            }catch(err){
                console.log(err);
            }
        }
    })

    return(
        <>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Enter email"
                        className={formik.errors.email && 'is-error'}
                    />
                    {formik.errors.email ? <div className="error-text">{formik.errors.email}</div> : null}

                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="******"
                        className={formik.errors.password && 'is-error'}
                    />
                    {formik.errors.password ? <div  className="error-text">{formik.errors.password}</div> : null}

                </div>
                <div>
                    <button type="submit">login</button>
                </div>
            </form>
            
        </>
    )
}

export default Login