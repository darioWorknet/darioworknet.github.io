const $cards = document.querySelector("#work-container"),
  $template = document.getElementById("card-template").content,
  $fragment = document.createDocumentFragment(),
  imageFolder = "images/works/",
  linkFolder = "pages/second/",
  workList = [
        {
            image : "work-06.jpg",
            link : "3dd.html",
            name : "3D Design",
            description : "Design for manufacturing, workflow automation..."
        },
        {
            image : "work-03.jpg",
            link : "3dp.html",
            name : "Digital manufacturing",
            description : "Mainly 3d printing projects"
        },
        {
            image : "work-09.jpg",
            link : "programming.html",
            name : "Programming",
            description : "Main languages Java, Python and C"
        },
        {
            image : "work-10.jpg",
            link : "https://google.es",
            name : "Game development",
            description : "Arcade games developed with Java or Python"
        },
        {
            image : "work-04.jpg",
            link : "https://google.es",
            name : "Electronics",
            description : "Mainly Arduino projects"
        },
        {
            image : "work-07.jpg",
            link : "IoT.html",
            name : "IoT",
            description : "Custom projects made with Arduino and Raspberry Pi"
        },
  ];
  
workList.forEach((work) => {
    console.log("hello");
  $template.querySelector("img").setAttribute("src", imageFolder + work.image);
  $template.querySelector("a").setAttribute("href", linkFolder + work.link);
  $template.querySelector("h3").textContent = work.name;
  $template.querySelector("p").textContent = work.description;


  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);

});
$cards.appendChild($fragment);