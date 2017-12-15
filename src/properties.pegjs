// Properties Parser
// =================
// Returns Array of [name, value] pairs.

// Properties Syntax:
// https://docs.oracle.com/javase/9/docs/api/java/util/Properties.html#load-java.io.Reader-


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
  = _ CONT* line:(Comment / PropertyEntry) { return line; }


// Comment
Comment
  = CommentCharacter C* {}

CommentCharacter "CommentCharacter"
  = [#!]


// Property
PropertyEntry
  = name:PropertyName? NameValueSeparator? value:PropertyValue? {
      // Blank Line
      if (!name && !value) return;
      // Property Entry
      return [name, value];
    }

PropertyName "PropertyName" // key
  = a:(ESCAPE / [^\r\n\\:=]) b:(CONT{} / ESCAPE / [^ \t\f\r\n\\:=])* { return a + b.join(''); }

PropertyValue "PropertyValue" // element
  = v:(CONT{} / ESCAPE / C)+ { return v.join(''); }

NameValueSeparator "NameValueSeparator"
  = CONT* (_ CONT* [:=] / WS) _ CONT*


// Common
WS "White Space"
  = [ \t\f]

_ "White Spaces"
  = WS*

C "Character"
  = [^\r\n]

NL "Line Terminator"
  = "\r\n" / [\n\r]

CONT "Line Continuation"
  = "\\" NL _

ESCAPE "Escape Sequence"
  = !CONT "\\" .
