import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthProvider";
import {NavbarSimple} from "../components";
import {Container, Grid} from "@mantine/core";




function PrivateRoute() {
    const auth  = useAuth()
    return auth?.user
        ?
        (
            <Grid>
                <Grid.Col span={3}>
                    <NavbarSimple/>
                </Grid.Col>


                <Grid.Col span={9}>
                    <Container>
                        <Outlet/>
                    </Container>
                </Grid.Col>




            </Grid>
        )
        :
        <Navigate to="/login" replace/>
}

export default PrivateRoute;