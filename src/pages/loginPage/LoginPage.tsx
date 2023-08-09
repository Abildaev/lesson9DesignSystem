import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, PasswordInput } from '@mantine/core';


export function LoginPage() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
        },
    });

    return (
        <Box maw={320} mx="auto">
            <TextInput label="Username" placeholder="Name" {...form.getInputProps('name')} />
            <PasswordInput mt="md" label="Password" placeholder="Email" {...form.getInputProps('email')} />

            <Group position="center" mt="xl">
                <Button
                    variant="outline"
                    onClick={() =>
                        console.log(form)
                    }
                >
                    Set random values
                </Button>
            </Group>
        </Box>
    );
}