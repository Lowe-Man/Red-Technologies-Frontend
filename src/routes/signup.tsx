import Page from "../components/Page";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import React, {FormEvent, useRef} from "react";

export default function Signup() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "Email": email,
            "FullName": name,
            "Password": password
        });

        fetch("https://localhost:5001/api/users", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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