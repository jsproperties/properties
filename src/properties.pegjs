// Properties Parser
// =================
// Returns Array of [name, value] pairs.

// Properties Syntax:
// https://docs.oracle.com/javase/9/docs/api/java/util/Properties.html#load-java.io.Reader-


// File
PropertiesFile // property list
  = lines:Line* {
      // Filter out blank and comment lines
      return lines.filter(x => x !== undefined);
    }

// Line
Line // natural line
  = _ line:(Comment / PropertyEntry) NL { return line; }


// Comment
Comment
  = CommentCharacter C* {}

CommentCharacter "CommentCharacter"
  = [#!]


// Property
PropertyEntry
  = name:$PropertyName? NameValueSeparator? value:$PropertyValue? {
      // Blank Line
      if (name === "" && value === "") return;
      // Property Entry
      return [name, value];
    }

PropertyName "PropertyName" // key
  = (ESCAPE / [^\r\n:=]) (ESCAPE / [^ \t\f\r\n:=])*

PropertyValue "PropertyValue" // element
  = (ESCAPE / C)+

NameValueSeparator "NameValueSeparator"
  = (_ [:=] / WS) _


// Common
_ "White Spaces"
  = WS*

ESCAPE "Escape Sequence"
  = "\\" .

WS "White Space"
  = [ \t\f]

NL "Line Terminator"
  = "\r\n" / [\n\r]

C "Character"
  = [^\r\n]
