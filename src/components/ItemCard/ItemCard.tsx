import {Card, Container, Text} from '@mantine/core';
import {Link} from "react-router-dom";
import {ICharacters} from "../../types/charactersType";
import {ReactNode} from "react";




interface IProps {
    character: ICharacters,
    pathname: string,
    lastNodeRef: ReactNode


}



export function ItemCard({character, lastNodeRef, pathname}: IProps) {
    return (
        <Container py={10} ref={lastNodeRef ?? null}>
            <Link to={`${pathname}/${character.id}`} >
                <Card
                    shadow="sm"
                    padding="xl"
                >
                    <Text weight={500} size="lg" mt="md">
                        {character.name}
                    </Text>
                </Card>

            </Link>

        </Container>



    );
}