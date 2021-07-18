import Text from "./Text";

export default class PlainText implements Text {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  public modifyText(): string {
    return this.text;
  }
}