import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter password"),
});

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const router = useRouter();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            router.push("/admin");
        } catch (error) {
            console.log("error", error);
            setLoginError("Something went wrong! Try again.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {loginError && <FormError>{loginError}</FormError>}
                <fieldset disabled={submitting}>
                    <div>
                        <input
                            name="username"
                            placeholder="Username"
                            ref={register}
                        />
                        {errors.username && (
                            <FormError>{errors.username.message}</FormError>
                        )}
                    </div>

                    <div>
                        <input
                            name="password"
                            placeholder="Password"
                            ref={register}
                            type="password"
                        />
                        {errors.password && (
                            <FormError>{errors.password.message}</FormError>
                        )}
                    </div>
                    <button>{submitting ? "Loggin in..." : "Login"}</button>
                </fieldset>
            </form>
        </>
    );
}
