import BoldDecorator from "./BoldDecorator";
import PlainText from "./PlainText";
import ItalicDecorator from "./ItalicDecorator";
import Text from "./Text";

const plain = new PlainText("Hello, World");
const bold = new BoldDecorator(plain);
const italic  = new ItalicDecorator(plain);

function print(textContent: Text) {
  console.log(`${textContent.modifyText()}`);
}

print(bold);
print(italic);


