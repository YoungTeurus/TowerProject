import { APIUtils } from "../../utils/APIUtils";
import { UserService } from "../services/UserService";
import { User } from "../User";
import { MockConnection } from "./MockConnection";


export const CONNECTION = new MockConnection();
CONNECTION.addAnswer(CONNECTION.getServerURL(), (m, url, b) => {
    return { "body": "wow" }
});
CONNECTION.addAnswer(APIUtils.connectUrl(CONNECTION.getAPIBaseURL(), UserService.BASE_URL, "/get/1"), (m, url, b) => {
    if (m !== 'GET')
        throw new Error("Wrong method " + m + " Allowed methods: " + "GET");

    const result = new User("User1");
    result.authority = ["admin"];
    result.created = new Date();
    result.lastLogin = new Date();
    return result;
})