import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Todo from "./Todo";

const useStyles = makeStyles({
    todoStyle: {
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
    },
});

const ListTodo = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.todoStyle}>
                <Typography variant="h5">Todos</Typography>
                <Todo />
                <Todo />
            </div>
        </>
    );
};

export default ListTodo;
