import {ReactNode} from 'react'

export interface IPageComponent {
    id: number
    name: string
    component: ReactNode
    link: string,
    private: boolean,
    menuComponent: boolean,
    icon: ReactNode | null
}