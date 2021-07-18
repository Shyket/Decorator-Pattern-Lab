import TextDecorator from "./TextDecorator";

export default class ItalicDecorator extends TextDecorator {
  public modifyText(): string {
    return super.modifyText().italics();
  }
}
