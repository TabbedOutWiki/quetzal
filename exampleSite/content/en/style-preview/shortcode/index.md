---
translationKey: "shortcode"
title: "Shortcode"
description: "Preview frontmatter visuals"
---

## Block

### Article

{{< article "Article title" >}}
Article body text
{{< /article >}}

### Code

{{< highlight js "hl_lines=2" "file.js">}}
const logString = (str) => {
  console.log(str);
}
{{< /highlight >}}

### Details

{{< details summary="Summary" >}}
Details body text
{{< /details >}}

## Utility

| Tag      | Example                                                  |
|----------|----------------------------------------------------------|
| tooltip  | {{< tooltip "Hover this text!" "Ur mom lmao" >}}         |
| kbd      | {{< kbd "Alt" >}} + {{< kbd "Tab" >}}                    |
| progress | {{< progress "50" "100" >}}                              |
| meter    | {{< meter value="30" min="0" max="100" label="Meter" >}} |

## Embeds

{{< youtube "emGri7i8Y2Y" >}}
