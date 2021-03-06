var sampleQueries = {
	"example.1" :
  {
    "distinct": true,
    "variables": [
        "?disease",
        "?symptom"
    ],
    "defaultLang": "en",
    "order": null,
    "branches": [
        {
            "line": {
                "s": "?disease",
                "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#has_symptom",
                "o": "?symptom",
                "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
                "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Symptom",
                "values": [
                    {
                        "label": "abdominal cramps",
                        "uri": "http://www.wikidata.org/entity/Q3002092"
                    }
                ]
            },
            "children": []
        }
    ]
},
"example.2":
{
  "distinct": true,
  "variables": [
      "?this",
      "?Disease_1"
  ],
  "defaultLang": "en",
  "order": null,
  "branches": [
      {
          "line": {
              "s": "?this",
              "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#may_prevent",
              "o": "?Disease_1",
              "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Treatment",
              "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
              "values": []
          },
          "children": []
      }
  ]
}
};