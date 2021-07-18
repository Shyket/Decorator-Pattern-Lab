import TextDecorator from "./TextDecorator";

export default class BoldDecorator extends TextDecorator {
  public modifyText(): string {
    return super.modifyText().bold();
  }
}
