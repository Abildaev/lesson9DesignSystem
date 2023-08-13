import { useState } from 'react';
import { createStyles, Navbar, Group, Code, getStylesRef, rem, AppShell } from '@mantine/core';
import {IconLogout} from '@tabler/icons-react';
import {useAuth} from "../../context/AuthProvider";
import {NavLink, useNavigate} from "react-router-dom";
import {pageComponents} from "../../data/componentsData";


const useStyles = createStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,

            [`& .${getStylesRef('icon')}`]: {
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            [`& .${getStylesRef('icon')}`]: {
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            },
        },
    },
}));


export function NavbarSimple() {
    const { classes, cx } = useStyles();


    const auth = useAuth()

    const navigate = useNavigate()

    function logout () {
        auth?.signOut(() => navigate("/login", {replace: true}))
    }



    const links = pageComponents.map((item) => item.menuComponent && (
            <NavLink
                key={item.id}
                className={({isActive}) => isActive ? `${classes.linkActive} ${classes.link}` : classes.link}
                to={item.link}


            >
                <item.icon className={classes.linkIcon} stroke={1.5} />
                <span>{item.name}</span>
            </NavLink>
    ));

    return (
        <AppShell >
            <Navbar width={{ base: 350 }}   fullheight="true" p="md">
                <Navbar.Section grow>
                    <Group className={classes.header} position="apart">
                        <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
                    </Group>
                    {links}
                </Navbar.Section>

                <Navbar.Section className={classes.footer}>
                    <NavLink to="" className={classes.link} onClick={logout}>
                        <IconLogout className={classes.linkIcon} stroke={1.5} />
                        <span>Logout</span>
                    </NavLink>
                </Navbar.Section>
            </Navbar>


        </AppShell>

    );
}