alert('json');
d3.xml('http://europeana.ontotext.com/sparql.xml?query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0ASELECT+%3Fitem+%3Fdescription+%7B%0D%0A++%3Fproxy+ore%3AproxyFor+%3Fitem%3B+dc%3Adescription+%3Fdescription.%0D%0A++%3Fdescription+luc%3A+%22painting%22%0D%0A%7D%0D%0ALIMIT+100&_implicit=false&implicit=true&_equivalent=false&_form=%2Fsparql', function(xml){
     d3.select("#jsonchart")
    .selectAll("div")
    .data(xml.documentElement.getElementsByTagName("result"))
    .enter().append("div")
      .style("width", function(d) { return d.textContent * 10 + "px"; })
      .text(function(d) { return d.textContent; });
}); 
