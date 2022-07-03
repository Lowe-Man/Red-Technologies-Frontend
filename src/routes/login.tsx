import Page from "../components/Page";
import {MDBBtn,MDBInput} from "mdb-react-ui-kit";
import {FormEvent, useState} from "react";
import {login} from "../services/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login(email, password);
    }

    return (<Page headerTitle={"Login"}>
            <form onSubmit={submitForm}>
                <p className="h5 text-center mb-4">Login</p>
                <div className="grey-text">
                    <MDBInput
                        label="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <MDBInput
                        label="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="text-center">
                    <MDBBtn>Login</MDBBtn>
                </div>
            </form>
        </Page>
    );
}