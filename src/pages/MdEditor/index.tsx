import React, { useState } from "react";
import "./style.scss";
import MdTextarea from "components/MdTextarea";
import MdView from "components/MdView";
import parse from "utils/CustomMarked";

const MdEditor: React.FC = () => {

  const [md, setMd] = useState(
`An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, \`monospace\`. Itemized lists
look like:

  * this one
  * that one

> Block quotes are
> written like so.

An h2 header
------------

~~~
define foobar() {
    print 'Welcome to flavor country!';
}
~~~

\`\`\`python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
\`\`\`

### An h3 header ###

Tables can look like this:

|size |material     |color
|---- |------------ |------------
|9    |leather      |brown
|10   |hemp canvas  |natural
|11   |glass        |transparent

### 日本語ヘッダー

ネスト構造

- ほげ
  - ほげほげ
- ぴよ
  - ぴよぴよ`);
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => setMd(event.target.value);

  return (
    <div className="md-editor">
      <div className="md-editor__block">
        <MdTextarea value={md} setValue={onChangeHandler}></MdTextarea>
      </div>
      <div className="md-editor__block">
        <MdView html={parse(md)}></MdView>
      </div>
    </div>
  );
};

export default MdEditor;
