Godot Colors - Pure Black Editor Theme

<br><p align="center">
  <a href="https://github.com/PoQue00/Black-Editor-With-White-Comments">
    <img src="https://raw.githubusercontent.com/PoQue00/Black-Editor-With-White-Comments/icon.png" width="256" height="256" alt="Godot Colors - Midnight">
  </a>
</p><br>---

An Acode editor theme based on the default Godot 4.6 / 4.7 script editor colors, with a pure black background and pure white comments.

The original Godot syntax colors are preserved while the editor background has been changed to pure black ("#000000") and comments to pure white ("#FFFFFF").

---

Features

- Pure black editor background
- Pure black editor gutter
- Pure white comments
- Original Godot Colors syntax highlighting preserved
- Syntax colors based on the default Godot 4.6 / 4.7 dark script editor
- Distinct colors for keywords and control-flow keywords
- Separate colors for types, functions, variables and constants
- GDScript-specific syntax highlighting
- Supports both CodeMirror 6 and Ace
- Lightweight with no external dependencies

---

What Was Changed

This theme is based on the original "Godot Colors Acode theme" (https://github.com/Repechul/acode-plugin-godot-colors-editor-theme).

The original syntax palette has been kept intact, with the following visual changes:

Element| Original| This Theme
Editor background| Dark gray| "#000000"
Gutter background| Dark gray| "#000000"
Comments| Godot comment colors| "#FFFFFF"
Other syntax| Godot Colors| Unchanged

This means the actual code colors remain the Godot Colors palette rather than being replaced with a different syntax theme.

---

Compatibility

Acode Version| Engine| Status
"< 1.11.x"| Ace| Works
"1.11.x"| Ace| Works
"1.12.x+"| CodeMirror 6| Works

«Note: Exact GDScript token coverage in CodeMirror 6 depends on the grammar exposed by Acode. When Acode falls back to a generic tokenizer, only the tokens provided by that tokenizer will receive the corresponding syntax colors.»

---

Installation

From Acode Plugin Store

1. Open Acode → Plugins
2. Search for Godot Colors - Pure Black
3. Tap Install
4. Go to Settings → Editor Theme
5. Select Godot Colors - Pure Black

Manual Installation

1. Download the plugin ".zip" from the "GitHub repository" (https://github.com/PoQue00/Black-Editor-With-White-Comments)
2. Open Acode → Plugins
3. Select Install from file
4. Select the downloaded ".zip"

---

Repository

The complete source code for this theme is available on GitHub:

"PoQue00/Black-Editor-With-White-Comments" (https://github.com/PoQue00/Black-Editor-With-White-Comments)

---

Credits

This theme is based on:

"Repechul/acode-plugin-godot-colors-editor-theme" (https://github.com/Repechul/acode-plugin-godot-colors-editor-theme)

The original project provides the Godot-based syntax color palette and Acode theme implementation.

This version modifies the visual presentation by using a pure black background and pure white comments.

---

Author

PoQue

GitHub: "PoQue00" (https://github.com/PoQue00)

Repository: "Black-Editor-With-White-Comments" (https://github.com/PoQue00/Black-Editor-With-White-Comments)

---

License

MIT License

Copyright (c) 2026 - present PoQue

Based on the original Godot Colors Acode theme by Repechul (Bugrhak).
