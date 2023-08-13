import {useFetch} from "../../hooks/useFetch";
import {Title, Alert} from "@mantine/core";
import {ItemCard, Preloader} from "../../components";

import { IconAlertCircle } from '@tabler/icons-react';

import {useLocation} from "react-router-dom";
import {Filter} from "../../components";
import {apis} from "../../apis/apis";
import {IEpisodes} from "../../types/episodesTypes";




export function EpisodesPage() {
    const {pathname} = useLocation();
    const {isLoading, data, error, lastNodeRef} = useFetch<IEpisodes[]>(apis.episode);

    return (
        <div>
            <Title order={3} size="h1" py={50}>Episodes</Title>
            <Filter/>
            {isLoading && <Preloader/>}
            {error && <Alert mt={50} icon={<IconAlertCircle size="1rem" />} title="Error!" color="red">{error}</Alert>}

            {  data.length > 0
                &&
                data.map((el,index) => <ItemCard
                    key={el.id}
                    character={el}
                    pathname={pathname}
                    lastNodeRef={data.length === index + 1 ? lastNodeRef : null}
                />)

            }
        </div>
    );
}

