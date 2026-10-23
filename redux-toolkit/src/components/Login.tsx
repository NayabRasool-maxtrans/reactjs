import { useForm, type SubmitHandler } from "react-hook-form"
export interface FormData {
    name: string,
    email: string,
    password: string,
    phone: string
}

function UserForm() {
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const payload = { ...data }
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
                , body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('failed create user')
            }
            const result = await response.json()
            alert("user created successfully")
            console.log(result)

        }
        catch (error) {
            console.log('failed create a user')

        }
    }




    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ border: "1px solid red", height: "400px", width: "400px", display: "flex", flexDirection: "column", textAlign: "center" }}>
            <div style={{ margin: "5px" }}>
                <label>Name</label>
                <input type="text" {...register("name", {
                    required: "Name is required",
                    maxLength: { value: 150, message: "name must be at most 150 characters" }
                })} />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>
            <div style={{ margin: "5px" }}>
                <label>email</label>
                <input type="email" {...register("email", {
                    required: "email is required",
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "enter a valid email"
                    }
                })} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </div>
            <div style={{ margin: "5px" }}>
                <label>password</label>
                <input type="password" {...register("password", {
                    required: 'password is required',
                    minLength: { value: 8, message: "Password must be at least 8 characters", }
                })} />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
            </div>
            <div style={{ margin: "5px" }}>
                <label>phone</label>
                <input type="tel"{...register("phone", {
                    required: "phone number is required",
                    pattern: {
                        value: /^\d{10}$/,
                        message: "Enter a 10-digit phone number",
                    }

                })} />
                {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "submitting.." : 'create new user'}</button>

        </form>
    )
}
export default UserForm