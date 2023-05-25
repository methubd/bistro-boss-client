import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";


const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    


    return (
        <>
        <Helmet>
            <title>Bistro Boss | Sign up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true, 
                    minLength: 6,
                    pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/i
                     })} name="password" placeholder="password" className="input input-bordered" />
                     
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                {errors.password?.type === 'pattern' && <p className="text-red-600">
                    <ul>
                        <li>At least one special character</li>
                        <li>At least one number</li>
                        <li>Special characters are optional</li>
                        <li>Minimum six characters and maximum 16 characters</li>
                    </ul>
                </p>}

                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be in 8 characters</p>}
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit"/>
                
                </div>
            </form>

            </div>
        </div>
        </div>
        
        </>
    );
};

export default SignUp;