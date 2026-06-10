import { useController, useForm, type Control, type FieldPath, type FieldValues, type RegisterOptions } from "react-hook-form";
import BackLink from "../components/Backlink";
import { Box, Button, Card, Container, Flex, Text, TextField } from "@radix-ui/themes";

type Inputs = {
    text: string,
}

type RadixControlledInputProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> = {
    control: Control<TFieldValues>,
    name: TName,
    label?: string,
    placeholder?: string,

    rules?: RegisterOptions<TFieldValues, TName>,

    type?: "text" | "password" | "email",
    disabled?: boolean,
}

// Component for an input field with label and error message
function RadixControlledInput<
    TFieldValues extends FieldValues, 
    TName extends FieldPath<TFieldValues>
>({ 
    control,
    name,
    label,
    placeholder,
    rules,
    type = "text",
    disabled = false,
 }: RadixControlledInputProps<TFieldValues, TName>) {
    const {
        field,
        fieldState: { error },
    } = useController({ control, name, rules });
    return (
        <Flex direction="column" gap="1">
      {label && (
        <Text as="label" size="2" weight="medium">
          {label}
        </Text>
      )}

      {/* TextField.Root is the input in this case */}
      <TextField.Root
        {...field}
        value={field.value ?? ""}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        color={error ? "red" : undefined}
      />

      {error && (
        <Text color="red" size="1">
          {error.message}
        </Text>
      )}
    </Flex>
    );
}

export default function RadixComponentForm() {
    const { control, handleSubmit, formState } = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        console.log(data);
    };

    return (
        <Container size="1" minHeight="100vh">
            <Flex direction="column" align="center" justify="center" minHeight="100vh">
            <Box maxWidth="400px">
                <Card>
                    <BackLink />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Flex direction="column" gap="2">
                            <Text>5. Radix UI components</Text>
                            <Text>
                                Here the input is a Radix UI component instead of a native HTML input <br />
                                We use rhf controller to connect the Radix component to the form state <br />
                            </Text>
                            <RadixControlledInput
                                control={control}
                                name="text"
                                label="Text"
                                placeholder="Enter some text"
                                rules={{
                                    required: "This field is required",
                                    minLength: {
                                        value: 5,
                                        message: "Minimum length is 5",
                                    },
                                }}
                            />
                            <Button type="submit" disabled={!formState.isValid}>Submit</Button>
                        </Flex>
                    </form>
                </Card>
            </Box>
            </Flex>
        </Container>
    )
}