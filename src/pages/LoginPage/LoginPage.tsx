import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Container, PasswordInput, Paper} from '@mantine/core';
import {useAuth} from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";
import {ILogin} from "../../types/authTypes";


export function LoginPage() {
    const form = useForm<ILogin>({
        initialValues: {
            username: '',
            password: '',
        },
    });

    const auth = useAuth()
    const navigate = useNavigate()

    const submit = () => {
        const {username, password} = form.values
        auth?.signIn({username, password} , navigateToPages)
    }

    function navigateToPages() {
        navigate("/")
    }




    return (
    <Container size={420} my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit(submit)}>
                <TextInput label="Username" placeholder="Name" required {...form.getInputProps('username')} />
                <PasswordInput mt="md" label="Password" placeholder="Email" required {...form.getInputProps('password')} />
                <Group position="center" mt="xl">
                    <Button
                        fullWidth
                        type="submit"
                    >
                        Sign in
                    </Button>
                </Group>

            </form>

        </Paper>
    </Container>
    );
}