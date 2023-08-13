import {useFetch} from "../../hooks/useFetch";
import {Title, Alert} from "@mantine/core";
import {ItemCard, Preloader} from "../../components";

import { IconAlertCircle } from '@tabler/icons-react';

import {useLocation} from "react-router-dom";
import {Filter} from "../../components";
import {apis} from "../../apis/apis";
import {ICharacters} from "../../types/charactersType";





export function CharactersPage() {
    const {pathname} = useLocation();
    const {isLoading, data, error, lastNodeRef} = useFetch<ICharacters[]>(apis.character);

    return (
        <div>
            <Title order={3} size="h1" py={50}>Characters</Title>
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

