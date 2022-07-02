import Page from "../components/Page";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import React, {FormEvent, useRef} from "react";

export default function Signup() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(name, email, password);

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