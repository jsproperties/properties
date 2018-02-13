// Properties Parser
// =================
// Returns Array of { key: string | null, element: string | null,
// [original: string], [eol: string | null] [location: Location] } objects.

// Properties Syntax:
// https://docs.oracle.com/javase/9/docs/api/java/util/Properties.html#load-java.io.Reader-

{
  // Whether to include blank and comment lines
  //options.all = true;
  // Whether to include separator
  //options.sep = true;
  // Whether to include indentation
  //options.indent = true;
  // Whether to include eol (end of line)
  //options.eol = true;
  // Whether to include the original logical line
  //options.original = true;
  // Whether to include location info
  //options.location = true;
}

// File
PropertiesFile // property list
  = lines:FullLine* trailing:TrailingLine? {
      // Add the trailing line, i.e. line without eol
      if (trailing) lines.push(trailing);
      // Filter out blank and comment lines
      return lines.filter(x => x !== undefined);
    }

// Line
FullLine // logical line with eol
  = line:Line eol:NL {
      if (!line) return;
      if (options.eol) line.eol = eol;
      return line;
    }

Line // logical line without eol
  = indent:$(_ CONT*) line:(Comment / PropertyEntry) {
      if (!line) {
        if (options.all) {
          line = { key: null, element: null };
          if (options.sep) line.sep = null;
        } else {
          return undefined;
        }
      }

      if (options.indent) line.indent = indent;
      if (options.eol) line.eol = null;
      if (options.original) line.original = text();
      if (options.location) line.location = location();

      return line;
    }

TrailingLine // The last logical line without final eol
  = line:Line {
      // If the offset of start and end match, there is actually no trailing
      // line; TrailingLine is matched in this case because a line itself
      // (not counting eol) may contain no characters.
      return location().start.offset === location().end.offset ?
          undefined : line;
    }

// Comment
Comment
  = CommentCharacter C* {}

CommentCharacter "CommentCharacter"
  = [#!]


// Property (or blank line)
PropertyEntry
  = key:PropertyKey? sep:$KeyElementSeparator? element:PropertyElement? {
      // Blank Line:
      // No need to test element, as whenever there is an element, there is a separator.
      // Note: Key and element can be empty at the same time.
      if (!key && !sep) return;

      // Property Entry:
      // Return an empty string for key and/or element if empty.
      var property = { key: key || "", element: element || "" };
      if (options.sep) property.sep = sep;
      return property;
    }

PropertyKey "PropertyKey"
  = a:(ESCAPE / [^\r\n\\:=]) b:(CONT{} / ESCAPE / [^ \t\f\r\n\\:=])* { return a + b.join(''); }

PropertyElement "PropertyElement"
  = v:(CONT{} / ESCAPE / C)+ { return v.join(''); }

KeyElementSeparator "KeyElementSeparator"
  = CONT* (_ CONT* [:=] / WS) _ CONT*


// Common
WS "White Space"
  = [ \t\f]

_ "White Spaces"
  = WS*

C "Character"
  = c:[^\r\n] {
      // Ignore final dangling backslash
      return c === "\\" ? undefined : c;
    }

NL "Line Terminator"
  = "\r\n" / [\n\r]

CONT "Line Continuation"
  = "\\" NL _

ESCAPE "Escape Sequence"
  = !CONT "\\" . { return text(); }
