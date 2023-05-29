import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const {createUser , updateUserProfile} = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email , data.password)
        .then(result=>{
            const loggedUser =result.user;
            console.log(loggedUser);
            updateUserProfile(data.name , data.PhotoURL)
            .then (()=> {
                console.log("Photo URL Submited");
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Congratulations! User Created Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            })
            .then(error=> console.log(error))
        })
    }

    console.log(watch("example"));


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} name="name" placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("PhotoURL")}  placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-700">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-700">Password must be 8 digite</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-700">Password not more then 20 digite</span>}
                                <label className="label">
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="sign up" />
                            </div>
                        </form>
                        <p className='mx-auto'><small>Aulredy Have an Account? <Link to='/login'>Sign Up</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;