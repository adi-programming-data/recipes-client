// import * as internal from "stream";
import Layer from "./Layer";

export default class Recipe {
    constructor(
        public Id: number,
        public Name: string,
        public Categoryid: number,
        public PreparationTimeInMinute: number,
        public Level: number,
        public AddDate: Date,
        public Layers: Layer[],
        public Prepretion: string[],
        public UserId: number,
        public Image: string,
        public IsDisplay: boolean

    ) {
        this.Image = '../../assets/images/' + Image;
        console.log(this.Image);
    }
}