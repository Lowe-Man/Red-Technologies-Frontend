import Page from "../components/Page";
import {MDBBtn, MDBInput} from "mdb-react-ui-kit";
import {FormEvent, useState} from "react";
import {signup} from "../services/auth";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signup(name, email, password);
    }

    return (<Page headerTitle={"Signup"}>
            <form onSubmit={submitForm}>
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                    <MDBInput
                        label="full name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br/>
                    <MDBInput
                        label="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br/>
                    <MDBInput
                        label="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="text-center">
                    <MDBBtn>Signup</MDBBtn>
                </div>
            </form>
        </Page>
    );
}