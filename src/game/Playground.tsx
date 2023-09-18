import React from "react";
import { UserService } from "./implemetation/services/UserService";
import { CONNECTION } from "./implemetation/test/MockConnectionProvider";
import { IConnection } from "./interfaces/IConnection";

interface Props {

}

interface State {

}

export class Playground extends React.Component<Props, State>
{
    constructor(props: Props) {
        super(props);

        const connection: IConnection = CONNECTION;

        connection.get(connection.getServerURL())
            .then(v => console.log(v));
        
        const userService = new UserService(connection);
        userService.getById(1)
            .then(u => console.log(u));
    }

    render(): React.ReactNode {
        return <>
            {"F12"}
        </>;
    }
}