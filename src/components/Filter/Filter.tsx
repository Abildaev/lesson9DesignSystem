import { TextInput, TextInputProps } from '@mantine/core';
import {useForm} from "@mantine/form";
import { IconSearch,  } from '@tabler/icons-react';
import {useSearchParams} from "react-router-dom";
import {IFilter} from "../../types/filterTypes";
import * as React from "react";
import {ChangeEvent} from "react";

export function Filter() {

    const [searchParams, setSearchParams] = useSearchParams();


    console.log()

    const onChange = (event: ChangeEvent<HTMLFormElement>) => {
        const target = event.target;
        if(target.value.trim()) {
            setSearchParams(searchParams => {
                searchParams.set(target.name, target.value)
                return searchParams
            })
        }else {
            setSearchParams(searchParams => {
                searchParams.delete(target.name)
            })
        }
    }


    return (
        <TextInput
            width={100}
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="md"
            placeholder="Search"
            name="name"
            value={searchParams.get("name") ? searchParams.get("name") : ""}
            onChange={onChange}
        />
    );
}