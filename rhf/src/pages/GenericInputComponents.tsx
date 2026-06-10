import {
    useForm,
    type FieldPath,
    type FieldValues,
    type RegisterOptions,
    type UseFormRegister,
} from "react-hook-form";
import BackLink from "../components/Backlink";

type FooBar = {
    minLength: string,
    maxLength: string,
    pattern: string,
    requiredField: string,
}

// This now takes generic type parameters for values and field name
type CustomInputProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> = {
    label: string,
    id: TName,
    register: UseFormRegister<TFieldValues>,
    rules?: RegisterOptions<TFieldValues, TName>,
    error?: string,
}

// Component for an input field with label and error message
function CustomInput<
    TFieldValues extends FieldValues, 
    TName extends FieldPath<TFieldValues>
>({ label, id, register, rules, error }: CustomInputProps<TFieldValues, TName>) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <label htmlFor={id}>{label}</label>
            {/* Note: we reconstruct the register call in here using the id and rules */}
            <input id={id} type="text" {...register(id, rules)} />
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    );
}

export default function GenericInputComponents() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FooBar>();

    const onSubmit = (data: FooBar) => console.log(data);

    return (
        <>
            <BackLink />
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h1>4. Generic Input components</h1>
                <p>
                    This form is the same as the previous one <br />
                    But the input components don't depend on the form shape
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

                <CustomInput
                    label="Required Field"
                    id="requiredField"
                    register={register}
                    rules={{
                        required: "This field is required",
                    }}
                    error={errors.requiredField?.message}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}