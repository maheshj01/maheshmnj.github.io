var jsonData = [
    {
        'name':'Vocabhub',
        'type':'Cross Platform',
        'url':'https://github.com/maheshmnj/vocabhub',
        'asset':"https://user-images.githubusercontent.com/31410839/125230053-a4855b00-e2f5-11eb-986b-14b1cb26635f.png",
        'description':`Vocabhub is a platform to improve your vocabulary, which allows you to learn 800+ advanced english words with their meaning, synonyms and examples. This is a community driven platform powered by supabase where users can learn and help improve the platform.`
    },
    {
        'name':'Paint Redesigned',
        'type':'Desktop ',
        'url':'https://github.com/maheshmnj/Paint-Redesigned',
        'asset':"",
        'description':`A Flutter Desktop app to do free drawing on the canvas. It has some basic paint app features such as <ul>
        <li>Undo-Redo paint Strokes</li>
        <li>Support Keyboard shortcuts</li>
        <li>Download Canvas output to Image</li>
        <li>Precisely Zoom to any corner of the canvas</li>
        <li>and more...</li>
        </ul>`
        
    },
    {
        'name':'Furdle',
        'type':'Mobile/Web',
        'url':'https://furdle.web.app/',
        'asset':"https://play-lh.googleusercontent.com/HnHFRHBu7Rg7hmRPjEqhsd_EHjzbr2tozrUbaBU7rlG6j6FFDfAdfBQSYockohPPnA=w5120-h2880-rw",
        'description':`Furdle is a word puzzle built with flutter. This is a clone of a popular app wordle (now owned by NY Times)`
    },
    {
        'name':'School Software',
        'type':'Web Application',
        'url':'',
        'asset':"",
        'description':` <a href="https://saurabh47.github.io">My friend</a> and I developed a school software,
        which can generate a photocopy of Transfer Certificate,Bonafide, and any type of
        official document,We have built this software using
        the javafx library.to make this software look rich and premium we have made use of the
        jfoenix library.JFoenix is an open source java library, that implements Google Material
        Design using java components.you can take a
        look at <a href="https://photos.app.goo.gl/pBdQjAy2eu7VJwVX8">couple of shots of the software here</a>.`
    },
];

function buildProjects(){
    var str = '';
    jsonData.forEach((item,x)=>{
    str+=
        `<div class="carousel-item ${x==0?"active":""}" data-bs-interval="4000">
        <div class="project-content"
            style="text-align: justify">
              <div class="card project-content row m-2 py-4">
                <div class="px-4 py-2 col">
                    <h3 class="mb-2">${item['name']}</h3>
                    <h5>${item['type']}</h5>
                    <p style="font-family:Raleway,helvlight,arial;font-size:18px;">
                        ${item['description']}
                    </p>
                </div>
                <div class="col">
                <img src="${item["asset"]}" width="100"/>
                </div>
              </div>
            </div>
            </div>
            `
    });
    document.getElementById("buildProjects").innerHTML = str;
}

buildProjects();