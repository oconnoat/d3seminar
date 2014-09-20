/* constants */
var slideWidth = 900;
var slideHeight = 700;

/* logo */
var logo = d3.select("#titleSlide #logo").append("svg:svg") // create the drawing surface
            .attr("width", slideWidth)
            .attr("height", slideHeight)
            .attr("class", "chart")
            .selectAll("text") //selectAll creates a selector array for svg text nodes on the surface, it's empty to start
            .data(["Displaying","Dazzling","Data"]) // attach some data
            .enter() // enter the data (for-each)
                .append("text") // creates a new text node
                .attr("x", 0)
                .attr("y", -200)
                .attr("class", "logoText") // css class
                .text(function(d){return d;}) // the value of the current data item
                .transition() // animate
                    .duration(2500)
                    .attr("y", function(d, i){ return 215 * i + 150; }); // the y position decided by the position of the data item in the array
            //note: this will only run once, when the page is displayed first

/* Svg */
var svgslide = d3.select("#svgchart").append("svg:svg")
            .attr("width", slideWidth-100)
            .attr("height", slideHeight-100)
            .attr("class", "chart")
            .attr("class", "border");

            svgslide.append("text")
            .attr("y", 325)
            .attr("x", 175)
            .attr("class", "logoText")
            .text("SVG"); //if I were to continue the chain here, it would append to text rather than svgslide

/* Shapes */
var shapeslide = d3.select("#shapechart").append("svg:svg")
                .attr("width", slideWidth-100)
                .attr("height", slideHeight / 3)
                .attr("class", "chart")
                .attr("class", "border");

    shapeslide.append("circle")
              .attr("cx", "50%")
              .attr("cy", "50%")
              .attr("r", "100")
              .attr("fill", "#fff");
/* Country chart example */
var exampleData = [
    {"name":"Ireland","value":852},
    {"name":"United Kingdom", "value":406},
    {"name":"France","value":182},
    {"name":"Greece", "value":174},
    {"name":"Zimbabwe","value":103}];


var countryslide = d3.select("#countrychart").append("svg:svg")
            .attr("height","50%")
            .attr("width","100%")
            .attr("class","chart");

var countryscale = d3.scale.linear()
                    .domain([0, d3.max(exampleData,
                                function(d){return d.value;})])
                    .range([0, 1]);

    countryslide.selectAll("circle")
                .data(exampleData)
                .enter()
                .append("g")
                .append("circle")
                .attr("cx", function(d,i){return (i * 20 + 15) + "%";})
                .attr("cy", "50%")
                .attr("fill", "white")
                .attr("r", function(d,i){ return countryscale(d.value) * 100;})
    countryslide.selectAll("text")
                .data(exampleData)
                .enter()
                .append("text")
                .attr("font-size", "16px")
                .attr("text-anchor", "middle")
                .attr("x", function(d,i){return  (i * 20 + 15) + "%";})
                .attr("y", "10%")
                .text(function(d){return d.name;});

/* Animation */

var animslidePos = d3.select("#animchartPos").append("svg:svg")
                .attr("width", "100%")
                .attr("height", "50%")
                .attr("class", "chart");

    animslidePos.append("rect")
                .attr("x", 5)
                .attr("y", 5)
                .attr("width", 50)
                .attr("height", 50)
                .attr("fill", "white");

    //just select the rectangle in the svg
    animslidePos.on("click", function(){
        animslidePos.select("rect")
        .transition()
        .duration(1000)
        .attr("x", "80%")
        .attr("y", "80%")
        .transition()
        .delay(1000)
        .attr("fill", "red");
    });


var animslideAdd = d3.select("#animchartAdd").append("svg:svg")
                .attr("width", "100%" )
                .attr("height", "25%" )
                .attr("class", "chart")

//the data array
var animslideAddData = ["蛅棦蛶晙亍衿軝蛚楉乜墏乇踀磣巿","晙亍衿軝蛚楉乜晙亍衿軝蛚楉乜墏墏","仈屴。冘秝豖莣垤","醽搕晙亍衿軝蛚楉乜墏嗀伔扦洁杅","氝佷庍溲晙亍衿軝蛚楉乜墏亍侀褑艀","溷磟扡晙亍衿軝蛚楉乜墏一菬孲","晊忞晙亍衿軝蛚楉乜墏宄姶兀，嫆","腏兀侅珆葃枔圣","兀狘鞂炷卬怭。蛢"];

    animslideAdd.on("click", function(){
        animslideAdd.selectAll("text")
        .data(animslideAddData)
        .enter()
        .append("text")
        .attr("fill", "#00ff00")
        .attr("stroke", "#ddffdd")
        .attr("transform", "rotate(90)") // rotates all co-ordinates by 90
        .attr("font-size", "22px")
        .attr("x", "-20%")
        .attr("y", function(d,i){ return (-70 * i); })
        .text(function(d,i){return d;})
        .transition().duration(4000)
        .attr("x", "100%");
    });

//Force-Directed Graph Setup
var forcecolor = d3.scale.category20();

var forceOne = d3.layout.force()
    .charge(-200)
    .linkDistance(100)
    .size([400, 400]);

var svgOne = d3.select("#forcechart").append("svg")
    .attr("class", "chart")
    .attr("width", "450px")
    .attr("height", "500px");

graphOne = {
   "nodes": [
       {"name":"A",  "group": 1},
       {"name":"B",  "group": 1},
       {"name":"C",  "group": 2},
       {"name":"D",  "group": 3},
       {"name":"E",  "group": 3}
   ],
   "links": [
       {"source":0, "target":1, "value":1},
       {"source":0, "target":2, "value":5},
       {"source":1, "target":2, "value":5},
       {"source":3, "target":4, "value":1},
       {"source":3, "target":2, "value":5},
       {"source":4, "target":2, "value":5},
   ]

};

//json
d3.json('gaga.json', function(error, json){
    if (error) return console.warn(error);
    var now = new Date(Date.now());
    var then = new Date(json["ical:dtstart"]);
    var days = Math.floor((now-then) / (1000 * 60 * 60 * 24));
    d3.select('#dateOutput').append('p').text(days+' days have elapsed');
});


//Force Directed Graph
forceOne
    .nodes(graphOne.nodes)
    .links(graphOne.links)
    .start();

var linkOne = svgOne.selectAll(".link")
    .data(graphOne.links)
  .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", function(d) { return Math.sqrt(d.value); });

var nodeOne = svgOne.selectAll(".node")
    .data(graphOne.nodes)
  .enter().append("circle")
    .attr("class", "node")
    .attr("r", 5)
    .style("fill", function(d) { return forcecolor(d.group); })
    .call(forceOne.drag);

nodeOne.append("title")
    .text(function(d) { return d.name; });


forceOne.on("tick", function() {
  linkOne.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  nodeOne.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

/* final app code */

var dbpediagames = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=PREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%0D%0APREFIX+dbpedia2%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbpedia%3A+%3Chttp%3A%2F%2Fdbpedia.org%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0ASELECT+%3Fgame+%3Ftitle%0D%0AWHERE+%7B%0D%0A++++%3Fgame+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Fsubject%3E+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FCategory%3AFirst-person_shooters%3E+.%0D%0A++++%3Fgame+foaf%3Aname+%3Ftitle+.%0D%0A%7D%0D%0AORDER+by+%3Ftitle%0D%0ALIMIT+5%0D%0A&output=json"; 
d3.json(dbpediagames, function(error, json){
   console.log('result json:');
   console.log(json); 
    // create a row for each object in the data
    var rows = d3.select('#bindresults').selectAll("tr")
        .data(json['results']['bindings'])
        .enter()
        .append("tr");

    var cells = rows.selectAll('td').data(function(d){return d3.values(d)})
  .enter().append("td")
  .text(function(d) {return d['value']});

  var graphresults =d3.select('#graphresults').append('svg:svg')
  .attr("class", "chart")
  .attr("width", "500px")
  .attr("height", "500px");
  
  var groups = graphresults.selectAll('g')
  .data(json['results']['bindings']).enter().append('g');

//draw the line under the ellipses
  groups.append('line')
 .attr('x1',100) 
 .attr('x2',300) 
 .attr('y1', function(d, i){ console.log(d); return (i * 100 + 50);}) 
 .attr('y2', function(d, i){ console.log(d); return (i * 100 + 50);}) 
 .attr('stroke', 'gray')
 .attr('stroke-width', 5)
 .append('svg:title').text('hasTitle');


  groups.append('circle')
  .attr("r", 45)
  .attr("fill", "blue")
  .attr("cx", 100)
  .attr("cy", function(d, i){ console.log(d); return (i * 100 + 50)}) 
  .append('svg:title').text(function(d,i){return d.game.value});

 groups.append('circle')
  .attr("r", 45)
  .attr("fill", "red")
  .attr("cx", 300)
  .attr("cy", function(d, i){ console.log(d); return (i * 100 + 50)}) 
  .append('svg:title').text(function(d,i){return d.title.value});
});
