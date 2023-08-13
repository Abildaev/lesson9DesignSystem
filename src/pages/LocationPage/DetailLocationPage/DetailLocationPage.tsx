import {Card, Text, Group, Alert} from '@mantine/core';
import {IconAlertCircle} from "@tabler/icons-react";
import {useFetchDetail} from "../../../hooks/useFetch";
import {ILocation} from "../../../types/locationTypes";
import {apis} from "../../../apis/apis";
import {useParams} from "react-router-dom";


export function DetailLocationPage() {
    const {id} = useParams();
    const {error, data, isLoading} = useFetchDetail<ILocation>(`${apis.location}${id}`)

    return (
        <>
            {isLoading && 'Загрузка...'}
            {error && <Alert mt={50} icon={<IconAlertCircle size="1rem" />} title="Error!" color="red">{error}</Alert>}
            {data && <Card py={50} >

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{data.name}</Text>
                </Group>

                <Text size="sm" color="dimmed">
                    dimension: {data.dimension}
                </Text>

                <Text size="sm" color="dimmed">
                    type: {data.type}
                </Text>
                <Text size="sm" color="dimmed">
                    created: {data.created}
                </Text>
            </Card>}
        </>
    );
}
