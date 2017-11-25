// Properties Parser
// =================
// Returns Array of [name, value] pair.

// File
PropertiesFile
  = lines:Line* {
      // Filter out empty lines and comments
      return lines.filter(x => x !== undefined);
    }

// Line
Line
  = PropertyEntry / Comment


// Property
PropertyEntry
  = _ name:$PropertyName _ NameValueSeparator _ value:$PropertyValue {
    return [name, value];
  }

PropertyName
  = [a-zA-z]+

PropertyValue
  = C*

NameValueSeparator
  = [=:]


// Comment
Comment
  = _ CommentCharacter C* {}

CommentCharacter
  = [#!]


// Common
C "CharacterExceptNewLine"
  = [^\r\n]

_ "Whitespaces"
  = [ \t\n\r]*
