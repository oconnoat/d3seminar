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
var shapeslide = d3.select("#shapes #shapechart").append("svg:svg")
                .attr("width", slideWidth-100)
                .attr("height", slideHeight / 3)
                .attr("class", "chart")
                .attr("class", "border");

    shapeslide.append("circle")
              .attr("cx", "350")
              .attr("cy", "150")
              .attr("r", "50")
              .attr("fill", "#300");

