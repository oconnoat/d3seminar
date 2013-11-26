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
              .attr("cx", "350")
              .attr("cy", "150")
              .attr("r", "50")
              .attr("fill", "#333");

/* Animation */

var animslidePos = d3.select("#animchartPos").append("svg:svg")
                .attr("width", "100%")
                .attr("height", "80%")
                .attr("class", "chart")
                .attr("class", "border");
   
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
        .attr("y", "75%")
        .transition()
        .delay(1000)
        .attr("fill", "red");
    });


var animslideAdd = d3.select("#animchartAdd").append("svg:svg")
                .attr("width", slideWidth /3 )
                .attr("height", slideHeight / 2)
                .attr("class", "chart")
                .attr("class", "border");
//the data array
var animslideAddData = ["电","كهرباء","बिजली","전기","⚡"];

    animslideAdd.on("click", function(){
        alert("data");
        animslideAdd.selectAll("text")
        .data(animslideAddData)
        .enter()
        .append("text")
        .attr("class","matrixText")
        .attr("y", 0)
        .attr("x", function(d,i){ return (10 + 20 * i); })
        .text(function(d,i){console.log(d); return d;})
        .transition()
        .attr("y", "80%");
        
    });
