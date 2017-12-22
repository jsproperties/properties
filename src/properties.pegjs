// Properties Parser
// =================
// Returns Array of [key, element, [original], [location]] pairs.

// Properties Syntax:
// https://docs.oracle.com/javase/9/docs/api/java/util/Properties.html#load-java.io.Reader-

{
  // Whether to include blank and comment lines
  //options.all = true;
  // Whether to include the original logical line
  //options.original = true;
  // Whether to include location info
  //options.location = true;
}

// File
PropertiesFile // property list
  = lines:(Line NL)* trailing:Line? {
      // We only care the Line part; drop NL part
      lines = lines.map(l=>l[0]);
      // Add the trailing line, i.e. line without eol
      if (trailing) lines.push(trailing);
      // Filter out blank and comment lines
      return lines.filter(x => x !== undefined);
    }

// Line
Line // logical line
  = _ CONT* line:(Comment / PropertyEntry) {
      if (options.all && !line) line = [null, null];
      if (options.original && line) line.push(text());
      if (options.location && line) line.push(location());
      return line;
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
      return [key || "", element || ""];
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
