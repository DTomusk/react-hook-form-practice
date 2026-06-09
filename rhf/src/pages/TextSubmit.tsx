import { useForm, type SubmitHandler } from "react-hook-form";
import BackLink from "../components/Backlink";

// The shape of the form data
type Inputs = {
    text: string,
}

export default function TextSubmit() {
    const {
        // registers input fields (e.g. text)
        register,
        // defines submission behaviour
        handleSubmit,
    } = useForm<Inputs>();

    // Note: onSubmit overrides default submit behaviour
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <>
            <BackLink />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>1. Text input with submit</h1>
                <p>
                    This is about as simple as a form you can make <br/>
                    It has a single text input and a submit button <br/>
                    It doesn't include any validation or error handling
                </p>
                <input type="text" {...register("text")} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}