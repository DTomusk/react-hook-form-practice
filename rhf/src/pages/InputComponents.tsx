import {
    useForm,
    type RegisterOptions,
    type UseFormRegister,
} from "react-hook-form";
import BackLink from "../components/Backlink";

type Inputs = {
    minLength: string,
    maxLength: string,
    pattern: string,
}

// Note: this type depends on Inputs
// A real reusable component would not depend on a specific form shape
type CustomInputProps = {
    label: string,
    id: keyof Inputs,
    register: UseFormRegister<Inputs>,
    rules?: RegisterOptions<Inputs, keyof Inputs>,
    error?: string,
}

// Component for an input field with label and error message
function CustomInput({ label, id, register, rules, error }: CustomInputProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...register(id, rules)} />
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    );
}

export default function InputComponents() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => console.log(data);

    return (
        <>
            <BackLink />
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h1>3. Input components</h1>
                <p>
                    This form is the same as the previous one <br />
                    But the inputs are custom components
                </p>
                <CustomInput
                    label="Min Length"
                    id="minLength"
                    register={register}
                    rules={{
                        required: "Min Length is required",
                        minLength: {
                            value: 5,
                            message: "Minimum length is 5",
                        },
                    }}
                    error={errors.minLength?.message}
                />

                <CustomInput
                    label="Max Length"
                    id="maxLength"
                    register={register}
                    rules={{
                        required: "Max Length is required",
                        maxLength: {
                            value: 10,
                            message: "Maximum length is 10",
                        },
                    }}
                    error={errors.maxLength?.message}
                />

                <CustomInput
                    label="Pattern (letters only)"
                    id="pattern"
                    register={register}
                    rules={{
                        required: "Pattern is required",
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: "Only letters are allowed",
                        },
                    }}
                    error={errors.pattern?.message}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}