---
translationKey: "shortcode"
title: "Shortcode"
description: "Preview frontmatter visuals"
---

## Block

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

### HTML Tags

| Tag      | Example                                                  |
|----------|----------------------------------------------------------|
| kbd      | {{< kbd "Alt" >}} + {{< kbd "Tab" >}}                    |
| progress | {{< progress "50" "100" >}}                              |
| meter    | {{< meter value="30" min="0" max="100" label="Meter" >}} |

### Tabs

{{< tabs "Tab 1" "Tab 2" >}}

{{< tab "Tab 1" >}}
This is the tab content for "Tab 1". The first tab is active by default, and name of each tab must match the name of the corresponding panels.
{{< /tab >}}

{{< tab "Tab 2" >}}
This is the tab content for "Tab 2". This tab is hidden by default.
{{< /tab >}}

### Tooltips

{{< tooltip "Hover this text!" "Ur mom lmao" >}}

## Embeds

{{< youtube "emGri7i8Y2Y" >}}
