# Godot Colors (Editor Theme)
<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/Repechul/acode-plugin-godot-colors-editor-theme/refs/heads/master/icon.png" width="256" height="256" alt="icon">
</p>
<br>

---

**Acode editor theme matching the default Godot 4.6 / 4.7 script editor colors.**
Same dark background and syntax highlighting you already know from the Godot script editor.

---

- Full repaint based on the default dark script editor theme of Godot 4.6 / 4.7
- Colors sourced directly from Godot's own `editor_theme_manager.cpp` defaults
- Distinct colors for keywords vs control-flow keywords (`if`/`for`/`return`...)
- Base type, engine type and user type each get their own color, like in Godot
- Function definitions, function calls and member variables are told apart
- GDScript-specific tokens covered: annotations (`@export`), node paths (`$Node`),
  unique node references (`%Node`) and StringName literals (`&"name"`)
- Brackets and punctuation now share a single color, matching Godot's own symbol color

---

## Features

- Every syntax token colored to match Godot's own default dark theme
- Supports both **Ace** and **CodeMirror 6** engines
- Lightweight, no dependencies
- Works on all Acode versions, including 1.12.x+ (CodeMirror 6)

---

## Installation

### From Acode Plugin Store
1. Open **Acode → Plugins**
2. Search **Godot Colors (Theme)**
3. Tap **Install**
4. Go to **Settings → Editor Theme → Godot Colors (Theme)**

### Manual Installation
1. Download the `.zip` for this plugin
2. Open **Acode → Plugins → Install from file**
3. Select the downloaded `.zip`

---

## Compatibility

| Acode Version | Engine | Status |
|---------------|--------|--------|
| < 1.11.x | Ace | Works |
| 1.11.x | Ace | Works |
| 1.12.x+ | CodeMirror 6 | Works |

Note: exact GDScript token coverage in CodeMirror 6 depends on Acode exposing a
proper GDScript grammar. Where Acode falls back to a generic tokenizer, only the
tokens that generic mode actually emits (keywords, strings, numbers, comments,
etc.) will show these colors.

---

## Author

**Repechul** - GitHub: [hhttps://github.com/Repechul](https://github.com/Repechul)

---

## License MIT

Copyright (c) 2026 - present Repechul (Bugrhak)
