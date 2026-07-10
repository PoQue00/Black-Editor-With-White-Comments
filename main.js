!function () {
  "use strict";

  var pluginId = "godot-colors-editor-theme";
  var ACE_THEME_NAME = "godot.colors.4.7";
  var ACE_THEME_PATH = "ace/theme/" + ACE_THEME_NAME;
  var CM_THEME_ID = "godot.colors.4.7";


  var aceCSS = [
    ".ace-godot.colors.4.7 { color: #ffffffbf; background-color: #171717 }",
    ".ace-godot.colors.4.7 .ace_gutter { color: #ffffff80; background-color: #171717 }",
    ".ace-godot.colors.4.7 .ace_gutter-active-line { font-weight: bold; color: #ffffffbf }",
    ".ace-godot.colors.4.7 .ace_print-margin { width: 1px; background: #313131 }",
    /* cursor y seleccion */
    ".ace-godot.colors.4.7 .ace_cursor { color: #ffffff }",
    ".ace-godot.colors.4.7 .ace_marker-layer .ace_selection { background: #3de97666; border-radius: 0 }",
    ".ace-godot.colors.4.7 .ace_multiselect .ace_selection.ace_start { box-shadow: 0 0 3px #000 }",
    ".ace-godot.colors.4.7 .ace_marker-layer .ace_step { background: #fae345 }",
    ".ace-godot.colors.4.7 .ace_marker-layer .ace_bracket { margin: -1px 0 0 -1px; border: 1px solid rgba(171, 201, 255, 0.3) }",
    ".ace-godot.colors.4.7 .ace_marker-layer .ace_active-line { background: #ffffff12 }",
    ".ace-godot.colors.4.7 .ace_marker-layer .ace_selected-word { background-color: #ffffff12; border: 1px solid rgba(171, 201, 255, 0.3) }",
    ".ace-godot.colors.4.7 .ace_invisible { color: #3a3a3a }",
    /* palabras clave */
    ".ace-godot.colors.4.7 .ace_keyword { color: #ff7085 }",
    ".ace-godot.colors.4.7 .ace_keyword.ace_operator { color: #ff7085 }",
    /* constantes */
    ".ace-godot.colors.4.7 .ace_constant.ace_language { color: #ff7085 }",
    ".ace-godot.colors.4.7 .ace_constant.ace_numeric { color: #a1ffe0 }",
    ".ace-godot.colors.4.7 .ace_constant.ace_character { color: #a1ffe0 }",
    ".ace-godot.colors.4.7 .ace_constant.ace_character.ace_escape { color: #ffbf66 }",
    ".ace-godot.colors.4.7 .ace_constant.ace_other { color: #a1ffe0 }",
    /* soporte / builtins */
    ".ace-godot.colors.4.7 .ace_support.ace_function { color: #57b3ff }",
    ".ace-godot.colors.4.7 .ace_support.ace_function.ace_dom { color: #57b3ff }",
    ".ace-godot.colors.4.7 .ace_support.ace_constant { color: #a1ffe0 }",
    ".ace-godot.colors.4.7 .ace_support.ace_type { color: #8fffdb }",
    /* clase */
    ".ace-godot.colors.4.7 .ace_class { color: #c7ffed }",
    /* almacenamiento */
    ".ace-godot.colors.4.7 .ace_storage { color: #ff7085 }",
    ".ace-godot.colors.4.7 .ace_storage.ace_type { color: #ff7085 }",
    /* variable */
    ".ace-godot.colors.4.7 .ace_variable { color: #ffffffbf }",
    ".ace-godot.colors.4.7 .ace_variable.ace_language { color: #ff7085 }",
    ".ace-godot.colors.4.7 .ace_variable.ace_parameter { color: #ffffffbf }",
    /* string */
    ".ace-godot.colors.4.7 .ace_string { color: #ffeda1 }",
    ".ace-godot.colors.4.7 .ace_string.ace_regexp { color: #ffeda1 }",
    /* comentario */
    ".ace-godot.colors.4.7 .ace_comment { color: #ffffff80; font-style: italic }",
    /* constante generica */
    ".ace-godot.colors.4.7 .ace_constant { color: #a1ffe0 }",
    /* identificadores */
    ".ace-godot.colors.4.7 .ace_identifier { color: #ffffffbf }",
    ".ace-godot.colors.4.7 .ace_variable.ace_other { color: #ffffffbf }",
    ".ace-godot.colors.4.7 .ace_entity.ace_other.ace_inherited-class { color: #8fffdb }",
    ".ace-godot.colors.4.7 .ace_support.ace_other { color: #ffffffbf }",
    ".ace-godot.colors.4.7 .ace_meta.ace_import .ace_identifier { color: #ffffffbf }",
    ".ace-godot.colors.4.7 .ace_meta.ace_import .ace_support { color: #ffffffbf }",
    ".ace-godot.colors.4.7 .ace_meta.ace_import .ace_variable { color: #ffffffbf }",
    /* HTML / XML */
    ".ace-godot.colors.4.7 .ace_meta.ace_tag { color: #ff7085 }",
    ".ace-godot.colors.4.7 .ace_entity.ace_other.ace_attribute-name { color: #bce0ff; font-style: italic }",
    ".ace-godot.colors.4.7 .ace_punctuation.ace_tag { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_entity.ace_name.ace_tag { color: #ff7085 }",
    /* parentesis y simbolos, todos comparten el mismo color que en Godot */
    ".ace-godot.colors.4.7 .ace_paren { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_paren.ace_paren_open.ace_lparen { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_paren.ace_paren_open.ace_lcurly { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_paren.ace_paren_open.ace_lbracket { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_paren.ace_paren_close.ace_rparen { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_paren.ace_paren_close.ace_rcurly { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_paren.ace_paren_close.ace_rbracket { color: #abc9ff }",
    /* puntuacion */
    ".ace-godot.colors.4.7 .ace_punctuation { color: #abc9ff }",
    ".ace-godot.colors.4.7 .ace_punctuation.ace_operator { color: #abc9ff }",
    /* nombre de funcion */
    ".ace-godot.colors.4.7 .ace_entity.ace_name.ace_function { color: #57b3ff }",
    /* invalido */
    ".ace-godot.colors.4.7 .ace_invalid { color: #ffffffbf; background-color: #ff786b }",
    ".ace-godot.colors.4.7 .ace_invalid.ace_deprecated { color: #ffffffbf; background-color: #4a3a1a }",
    /* guias de indentacion */
    ".ace-godot.colors.4.7 .ace_indent-guide { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y }",
    ".ace-godot.colors.4.7 .ace_indent-guide-active { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y }"
  ].join("\n");

  var GodotColorsPlugin = (function () {
    function GodotColorsPlugin() {
      this.isCodeMirror = !!(editorManager && editorManager.isCodeMirror === true);
      this.onThemeChange = this.onThemeChange.bind(this);
    }

    GodotColorsPlugin.prototype.init = function () {
      var self = this;
      var settings = acode.require("settings");
      this.registerEditorTheme();
      // aplicar tras una breve espera para que Ace cargue la definicion del tema
      setTimeout(function () {
        var currentTheme = settings.get("editorTheme");
        if (self.isCodeMirror) {
          editorManager.editor.setTheme(CM_THEME_ID);
        } else {
          editorManager.editor.setTheme(ACE_THEME_PATH);
        }
      }, 300);
      settings.on("update", function (key, val) {
        if (key === "editorTheme") self.onThemeChange(val);
      });
    };

    GodotColorsPlugin.prototype.registerEditorTheme = function () {
      if (this.isCodeMirror) this.registerCodeMirrorTheme();
      else this.registerAceTheme();
    };

    GodotColorsPlugin.prototype.registerAceTheme = function () {
      if (typeof ace === "undefined" || typeof ace.define !== "function") return;
      ace.define(
        "ace/theme/" + ACE_THEME_NAME + ".css",
        ["require", "exports", "module"],
        function (req, exp, mod) { mod.exports = aceCSS; }
      );
      ace.define(
        "ace/theme/" + ACE_THEME_NAME,
        ["require", "exports", "module", "ace/theme/" + ACE_THEME_NAME + ".css", "ace/lib/dom"],
        function (require, exports, module) {
          exports.isDark = true;
          exports.cssClass = "ace-" + ACE_THEME_NAME;
          exports.cssText = require("./" + ACE_THEME_NAME + ".css");
          require("../lib/dom").importCssString(exports.cssText, exports.cssClass, false);
        }
      );
      try {
        var tml = ace.require("ace/ext/themelist");
        if (tml && Array.isArray(tml.themes)) {
          if (!tml.themes.some(function (thm) { return thm.theme === ACE_THEME_PATH; }))
            tml.themes.push({ caption: "Godot Colors (Theme)", theme: ACE_THEME_PATH, isDark: true });
        }
      } catch (err) {}
    };

    GodotColorsPlugin.prototype.registerCodeMirrorTheme = function () {
      var edt = acode.require("editorThemes");
      if (!edt || typeof edt.register !== "function" || typeof edt.createTheme !== "function" ||
          typeof edt.createHighlightStyle !== "function" || !edt.cm || !edt.cm.tags) return;
      if (typeof edt.get === "function" && edt.get(CM_THEME_ID)) edt.unregister(CM_THEME_ID);

      var createTheme = edt.createTheme;
      var createHighlightStyle = edt.createHighlightStyle;
      var tag = edt.cm.tags;

      // estilos de resaltado segun los colores exactos de Godot 4
      var highlight = createHighlightStyle([
        { tag: [tag.controlKeyword], color: "#ff8ccc" },
        { tag: [tag.keyword, tag.moduleKeyword, tag.definitionKeyword, tag.operatorKeyword, tag.self], color: "#ff7085" },
        { tag: [tag.modifier], color: "#ff7085" },
        { tag: [tag.operator, tag.derefOperator, tag.arithmeticOperator, tag.logicOperator, tag.bitwiseOperator, tag.compareOperator, tag.updateOperator, tag.definitionOperator, tag.typeOperator, tag.controlOperator], color: "#abc9ff" },
        { tag: [tag.punctuation, tag.separator], color: "#abc9ff" },
        { tag: [tag.paren, tag.brace, tag.squareBracket, tag.bracket, tag.angleBracket], color: "#abc9ff" },
        { tag: [tag.number, tag.integer, tag.float, tag.bool, tag.null], color: "#a1ffe0" },
        { tag: [tag.string, tag.docString, tag.character, tag.special(tag.string), tag.attributeValue, tag.url], color: "#ffeda1" },
        { tag: [tag.escape], color: "#ffbf66" },
        { tag: [tag.regexp], color: "#ffeda1" },
        { tag: [tag.comment, tag.lineComment, tag.blockComment], color: "#ffffff80", fontStyle: "italic" },
        { tag: [tag.docComment], color: "#99b3cccc", fontStyle: "italic" },
        { tag: [tag.annotation, tag.macroName], color: "#ffb373" },
        { tag: [tag.variableName, tag.local(tag.variableName), tag.definition(tag.variableName), tag.special(tag.variableName)], color: "#ffffffbf" },
        { tag: [tag.function(tag.variableName)], color: "#57b3ff" },
        { tag: [tag.definition(tag.function(tag.variableName))], color: "#66e6ff" },
        { tag: [tag.propertyName], color: "#bce0ff" },
        { tag: [tag.function(tag.propertyName)], color: "#57b3ff" },
        { tag: [tag.className, tag.typeName], color: "#8fffdb" },
        { tag: [tag.namespace], color: "#ffffffbf" },
        { tag: [tag.constant(tag.variableName), tag.constant(tag.name), tag.standard(tag.variableName)], color: "#a1ffe0" },
        { tag: [tag.labelName], color: "#b8c47d" },
        { tag: [tag.tagName], color: "#ff7085" },
        { tag: [tag.attributeName], color: "#bce0ff", fontStyle: "italic" },
        { tag: [tag.invalid], color: "#ffffffbf", backgroundColor: "#ff786b" }
      ]);

      edt.register({
        id: CM_THEME_ID, caption: "Godot Colors (Theme)", dark: true,
        getExtension: function () {
          return createTheme({
            dark: true,
            styles: {
              "&": { color: "#ffffffbf", backgroundColor: "#171717" },
              ".cm-content": { caretColor: "#ffffff" },
              ".cm-cursor, .cm-dropCursor": { borderLeftColor: "#ffffff", borderLeftWidth: "2px" },
              ".cm-selectionBackground, .cm-content ::selection": { backgroundColor: "#3de97666" },
              ".cm-gutters": { backgroundColor: "#171717", color: "#ffffff80", border: "none", borderRight: "1px solid #313131" },
              ".cm-activeLine": { backgroundColor: "#ffffff12" },
              ".cm-activeLineGutter": { backgroundColor: "#ffffff12", color: "#ffffffbf" },
              ".cm-matchingBracket": { outline: "1px solid rgba(171, 201, 255, 0.3)", color: "rgba(171, 201, 255, 0.9)" },
              ".cm-nonmatchingBracket": { outline: "1px solid #ff786b" },
              ".cm-tooltip": { backgroundColor: "#202020", border: "1px solid #313131", color: "#ffffffbf" },
              ".cm-tooltip-autocomplete > ul > li[aria-selected]": { backgroundColor: "#ffffff12" },
              ".cm-searchMatch": { backgroundColor: "#ffffff12", outline: "1px solid #699ce861" },
              ".cm-foldPlaceholder": { backgroundColor: "#ad75c433", color: "#ffffff45", border: "1px solid #313131" }
            },
            highlightStyle: highlight
          });
        },
        config: {
          name: CM_THEME_ID, dark: true,
          background: "#171717", foreground: "#ffffffbf",
          keyword: "#ff7085", string: "#ffeda1", number: "#a1ffe0",
          comment: "#ffffff80", function: "#57b3ff", variable: "#ffffffbf",
          type: "#8fffdb", class: "#c7ffed", constant: "#a1ffe0",
          operator: "#abc9ff", invalid: "#ff786b"
        }
      });
    };

    GodotColorsPlugin.prototype.isGodotCTheme = function (val) {
      var nrm = String(val || "").trim().toLowerCase();
      return nrm === ACE_THEME_NAME || nrm === ACE_THEME_PATH || nrm === CM_THEME_ID ||
        nrm === "godot-colors-editor-theme" || nrm === "godot_colors_editor_theme" || nrm === "godot colors editor theme";
    };

    GodotColorsPlugin.prototype.applyEditorTheme = function (val) {
      var editor = editorManager && editorManager.editor;
      if (!editor || !this.isGodotCTheme(val)) return;
      var settings = acode.require("settings");
      if (this.isCodeMirror) {
        editor.setTheme(CM_THEME_ID);
        if (val !== CM_THEME_ID) settings.update({ editorTheme: CM_THEME_ID }, false);
      } else {
        editor.setTheme(ACE_THEME_PATH);
        if (val !== ACE_THEME_NAME) settings.update({ editorTheme: ACE_THEME_NAME }, false);
      }
    };

    GodotColorsPlugin.prototype.onThemeChange = function (val) { this.applyEditorTheme(val); };

    GodotColorsPlugin.prototype.destroy = function () {
      if (this.isCodeMirror) {
        var edt = acode.require("editorThemes");
        if (edt && typeof edt.unregister === "function") edt.unregister(CM_THEME_ID);
      }
    };

    return GodotColorsPlugin;
  })();

  if (window.acode) {
    var plugin = new GodotColorsPlugin();
    acode.setPluginInit(pluginId, function (baseUrl, $page, extras) {
      if (!baseUrl.endsWith("/")) baseUrl += "/";
      plugin.baseUrl = baseUrl;
      plugin.init();
    });
    acode.setPluginUnmount(pluginId, function () { plugin.destroy(); });
  }

}();
