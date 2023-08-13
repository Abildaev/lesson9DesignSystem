import { Card, Image, Text, Badge, Group } from '@mantine/core';
import {useParams} from "react-router-dom";
import {apis} from "../../../apis/apis";
import {useFetchDetail} from "../../../hooks/useFetch";
import {ICharacters} from "../../../types/charactersType";

export function DetailCharactersPage () {

    const {id} = useParams();
    const {error, data, isLoading} = useFetchDetail<ICharacters>(`${apis.character}${id}`)
    return (
        <>
            {isLoading && 'Загрузка...'}
            {error && <Alert mt={50} icon={<IconAlertCircle size="1rem" />} title="Error!" color="red">{error}</Alert>}
            {data && <Card py={50} >

                <Card.Section>
                    <Image
                        maw={400}
                        mx="auto" radius="md"
                        src={data.image}
                        alt="Norway"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{data.name}</Text>
                    <Badge color={data.status === "Alive" ? "green" : "pink"} variant="light">
                        {data.status}
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                    gender: {data.gender}
                </Text>

            </Card>}
        </>
    );
}