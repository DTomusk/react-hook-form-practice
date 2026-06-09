import { useForm } from "react-hook-form";
import BackLink from "../components/Backlink"

type Inputs = {
    minLength: string,
    maxLength: string,
    pattern: string,
}

export default function TextValidation() {
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
                <h1>2. Text input with validation</h1>
                <p>
                    This form includes validation rules for the text input <br/>
                    It checks for minimum length, maximum length, and a regex pattern <br/>
                    If the input doesn't meet the validation criteria, an error message is displayed per input field <br/>
                    Note: submit is still enabled even with errors
                </p>
                <input type="text" placeholder="min length 5" {...register("minLength", { minLength: 5 })} />
                {errors.minLength && <span style={{ color: "red" }}>Minimum length is 5</span>}
                <input type="text" placeholder="max length 10" {...register("maxLength", { maxLength: 10 })} />
                {errors.maxLength && <span style={{ color: "red" }}>Maximum length is 10</span>}
                <input type="text" placeholder="pattern: only letters" {...register("pattern", { pattern: /^[A-Za-z]+$/i })} />
                {errors.pattern && <span style={{ color: "red" }}>Only letters are allowed</span>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}