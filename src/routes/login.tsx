import Page from "../components/Page";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";

export default function Login() {
    return (<Page headerTitle={"Login"}>
            <form>
                <p className="h5 text-center mb-4">Login</p>
                <div className="grey-text">
                    <MDBInput
                        label="email"
                        type="email"
                    />
                    <MDBInput
                        label="password"
                        type="password"
                    />
                </div>
                <div className="text-center">
                    <MDBBtn>Login</MDBBtn>
                </div>
            </form>
        </Page>
    );
}