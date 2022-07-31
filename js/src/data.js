var jsonData = [
    {
        'name':'Vocabhub',
        'type':'Cross Platform',
        'source':'https://github.com/maheshmnj/vocabhub',
        'app_url':'https://vocabhub.web.app/',
        'asset':"https://user-images.githubusercontent.com/31410839/125230053-a4855b00-e2f5-11eb-986b-14b1cb26635f.png",
        'description':`Vocabhub is a platform to improve your vocabulary, which allows you to learn 800+ advanced english words with their meaning, synonyms and examples. This is a community driven platform powered by supabase where users can learn and help improve the platform.`
    },
    {
        'name':'Paint Redesigned',
        'type':'Desktop ',
        'source':'https://github.com/maheshmnj/Paint-Redesigned',
        'app_url':'',
        'asset':"https://user-images.githubusercontent.com/31410839/182020366-5491533f-c9d4-4766-bfae-75ee644508e2.png",
        'description':`A Flutter Desktop app to do free drawing on the canvas. It has some basic paint app features such as <ul>
        <li>Undo-Redo paint Strokes</li>
        <li>Support Keyboard shortcuts</li>
        <li>Download Canvas output to Image</li>
        <li>Precisely Zoom to any corner of the canvas</li>
        </ul>`
        
    },
    {
        'name':'Furdle',
        'type':'Mobile/Web',
        'source':'https://github.com/maheshmnj/furdle',
        'app_url':'https://furdle.web.app/',
        'asset':"https://user-images.githubusercontent.com/31410839/182018189-ac424e91-4099-4b2f-b2c7-03a27572d2ce.png",
        'description':`Furdle is a word puzzle built with flutter. This is a clone of a popular app wordle (now owned by NY Times)`
    },
    {
        'name':'Beautiful Snippet',
        'type':'Web Application',
        'source':'https://github.com/maheshmnj/beautiful_snippet',
        'app_url':'https://beautiful-snippet.web.app/#/',
        'asset':"https://user-images.githubusercontent.com/31410839/113498511-21e94480-952b-11eb-9f4d-b15e948e0cb7.png",
        'description':`A Flutter Web app to generate beautiful code snippets.`
    },
];

function buildProjects(){
    var str = '';
    jsonData.forEach((item,x)=>{
    str+=
        `<div class="carousel-item ${x==0?"active":""}" data-bs-interval="4000">
            <div class="row"
            style="text-align: justify">
              <div class="col">
                <div>
                    <div class="px-4 py-2" id ="projects">
                        <h3 class="mb-2">${item['name']}</h3>
                        <h5>${item['type']}</h5>
                        <p style="font-family:Raleway,helvlight,arial;font-size:18px;">
                            ${item['description']}
                        </p>
                    </div>
                    <div>
                    <button class="btn btn-default appbtn" onclick=" window.open('${item["source"]}','_blank')">
                    <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/github.svg" height="24">
                    </button>
                    <button style="visibility: ${item["app_url"]==""?"hidden":"visible"}" class="btn btn-default appbtn" onclick="window.open('${item["app_url"]}','_blank')">Try the app</button>
                    </div>
                </div>
              </div>
              <div class="col d-none d-md-block">
                <div class="d-flex justify-content-center d-flex align-items-end">
                    <div class="text-center text-lg-left pl-lg-5" id="imageCenter">
                        <img src="${item["asset"]}"/>
                    </div>
                </div>
              </div>
            </div>
         </div>
        `
    });
    document.getElementById("buildProjects").innerHTML = str;
}

buildProjects();