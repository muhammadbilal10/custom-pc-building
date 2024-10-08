import { Component } from "./component";

export interface PCBuild {
  _id: string;
  name: string;
  totalPrice: string;
  components: Component[];
}
