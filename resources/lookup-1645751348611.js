(function(window, undefined) {
  var dictionary = {
    "ab12bcb4-f11f-46c2-906a-b61bd261a93b": "AVISOS",
    "c9e14a38-8a45-4116-9f11-7ea71a53209b": "ABOGABOTMORAL",
    "23e960c0-ff51-4bee-97bc-8b9c75c20799": "PANEL CONTROL",
    "12a91df5-4922-4ec2-8940-e1a26fcdc069": "LOGIN",
    "e3af2ea3-5240-4d15-9750-b47fe80caa73": "CONSTANCIA_RECIBIDO",
    "86be36ca-e44f-4760-ba64-5b3be327f54e": "DOCUMENTACION",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "INICIO",
    "adef1877-b292-4be3-8209-708d25ae2816": "ABOGABOTFISICA",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);