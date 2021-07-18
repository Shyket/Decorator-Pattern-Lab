import Text from "./Text";

export default class TextDecorator implements Text {
  protected textContent: Text;

  constructor(textContent: Text) {
    this.textContent = textContent;
  }

  public modifyText(): string {
    return this.textContent.modifyText();
  }
}