import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";

const useStyles = makeStyles({
    contentStyle: {
        margin: "30px auto",
    },
});

function App() {
    const classes = useStyles();
    return (
        <>
            <BrowserRouter>
                <Container maxWidth="md">
                    <NavBar />
                    <Container className={classes.contentStyle} maxWidth="sm">
                        <Switch>
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/" component={Todos} />
                        </Switch>
                    </Container>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;
