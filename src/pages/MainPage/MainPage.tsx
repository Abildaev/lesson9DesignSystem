import {useAuth} from "../../context/AuthProvider";
import { Title } from '@mantine/core';

export function MainPage() {
    const auth = useAuth()
    return <Title order={3} size="h1" py={50}>Welcome {auth?.user?.username}</Title>
}
