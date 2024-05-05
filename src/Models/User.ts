// import * as internal from "stream";

export default class User {
    constructor(
        public Id: number,
        public Name: string,
        public Address: string,
        public Mail: string,
        public Password: string
    ) { }
}