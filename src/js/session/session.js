var Session = (function() {
  var codeEntered = "";

  var getCodeEntered = function() {
    return codeEntered;
  };

  var setCodeEntered = function(code) {
    codeEntered = code;
  };

  return {
    getCodeEntered: getCodeEntered,
    setCodeEntered: setCodeEntered
  }
}).call(this);

export default Session;
