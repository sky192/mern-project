import React from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    todoStyles: {
        margin: "20px auto",
        padding: "20px",
        border: "2px solid #bdbdbd",
        borderRadius: "9px",
        display: "flex",
        justifyContent: "space-between",
    },
    grayStyle: {
        color: "#8f8f8f",
    },
});

const Todo = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.todoStyles}>
                <div>
                    <Typography variant="subtitle">Learn react</Typography>
                    <Typography className={classes.grayStyle} variant="body2">
                        Author: sama
                    </Typography>
                    <Typography className={classes.grayStyle} variant="body2">
                        Added 4days ago
                    </Typography>
                </div>
                <div>
                    <ButtonGroup
                        size="small"
                        aria-label="outlined primary button group"
                    >
                        <Button>
                            <CheckCircle color="action" />
                        </Button>
                        <Button>
                            <Create color="primary" />
                        </Button>
                        <Button>
                            <Delete color="secondary" />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
};

export default Todo;
