import {IPageComponent} from "../types/componentsTypes";
import {lazy} from "react";
import {
    IconFingerprint,
    IconKey,
    IconDatabaseImport,
    IconReceipt2,

} from '@tabler/icons-react';


function lazyImport (nameComponent: string) {
    return lazy(() => import('../pages').then(module => ({
        default: module[nameComponent],
    })))
}

const LoginPage = lazyImport("LoginPage")
const MainPage = lazyImport("MainPage")
const CharactersPage = lazyImport("CharactersPage")

const DetailCharactersPage = lazyImport("DetailCharactersPage")
const LocationPage = lazyImport("LocationPage")
const DetailLocationPage = lazyImport("DetailLocationPage")
const EpisodesPage = lazyImport("EpisodesPage")
const DetailEpisodePage = lazyImport("DetailEpisodePage")


export const pageComponents: IPageComponent[] = [
    {
        id: 1,
        name: "Main page",
        component: <MainPage/>,
        link: "/",
        private: true,
        menuComponent: true,
        icon: IconReceipt2

    },
    {
        id: 2,
        name: "Login page",
        component: <LoginPage/>,
        link: "/login",
        private: false,
        menuComponent: false,
        icon: null
    },
    {
        id: 3,
        name: "Characters",
        component: <CharactersPage/>,
        link: "/characters",
        private: true,
        menuComponent: true,
        icon: IconFingerprint
    },
    {
        id: 4,
        name: "Detail Character Page",
        component: <DetailCharactersPage/>,
        link: "/characters/:id",
        private: true,
        menuComponent: false,
        icon: null
    },
    {
        id: 5,
        name: "Location",
        component: <LocationPage/>,
        link: "/locations",
        private: true,
        menuComponent: true,
        icon: IconKey
    },
    {
        id: 6,
        name: "Detail Location",
        component: <DetailLocationPage/>,
        link: "/locations/:id",
        private: true,
        menuComponent: false,
        icon: null
    },
    {
        id: 7,
        name: "Episodes",
        component: <EpisodesPage/>,
        link: "/episodes",
        private: true,
        menuComponent: true,
        icon: IconDatabaseImport
    },
    {
        id: 8,
        name: "Detail Episode",
        component: <DetailEpisodePage/>,
        link: "/episodes/:id",
        private: true,
        menuComponent: false,
        icon: null
    },
]
