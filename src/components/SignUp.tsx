import React from "react";
import {RouteComponentProps} from "@reach/router"

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {useForm} from "react-hook-form";
import {useSelector} from "@xstate/react";
import {AnyState} from "xstate";
import {AuthService} from "../machines/authMachine";
import {ErrorOutlined} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(1)
    },
    paperRow: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: theme.spacing(1)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
}));

export interface SignUpProps extends RouteComponentProps {
    authService: AuthService;
}
const errorSelector = (state: AnyState) => state?.context;

const loginServiceSelector = (state: any) => state.context;
export default function SignUp({authService}: SignUpProps) {
    const classes = useStyles();
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const {message} = useSelector(authService, loginServiceSelector);
  
    // const [ state,sendAuth] = useActor(authService.state);
    // The normal Gigya account login process makes use of
    // the react-hook-form library
 
    const handleRegister = async (data: any) => {
        const params = {
            email: data.email,
            password: data.password,
        };
        authService.send({type: "SUBMIT", ...params})

    };
    const handleLogin = async () => {

        authService.send({type: "LOGIN"})

    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit(handleRegister)}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        {...register("email", {required: true})}
                    />
                    {errors && errors.email && <span>Please enter an Email address</span>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password", {required: true})}
                    />
                    {errors && errors.password && <span>Please enter a password</span>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    {message &&  <span><ErrorOutlined /> {message}</span>}

                    

                </form>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link  onClick={handleLogin} variant="body2">
                            {"Already have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>

            </div>
         


        </Container>
    );
}
