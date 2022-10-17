var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index=0;
var slaytCount=models.length;
var interval;


var settings = {
    duration : '2000',
    random : true, // burada random mu gitsin yoksa sıralı mı gitsin onu ayarlıyoruz. true=otomatik geçis , false=sıralı geçiş.
};

    init(settings);
    ShowSlide(index);


    //sliderin içerikleri arasında geçis.

    document.querySelector(".fa-circle-arrow-left").addEventListener("click",function(){

    index--;
    ShowSlide(index);

});

    document.querySelector(".fa-circle-arrow-right").addEventListener("click",function(){

    index++;
    ShowSlide(index);   

});



    //Tıklama anından itibaren otomatik oynatma durdurulur .
    document.querySelectorAll('.arrow').forEach(function(item){
        item.addEventListener('mouseenter',function(){
            clearInterval(interval);
        });
    });

    //Tıklama bittikten sonra mouse eger işaretlerin üstünden ayrılırssa otomatik oynatma devam eder.

    document.querySelectorAll(".arrow").forEach(function(item){
        item.addEventListener('mouseleave',function(){
            
            //otomatik geçisi tekrardan aktifleştiriyoruz.
            init(settings);
        });
    });



    //slider içerikleri arasında otomatik geçiş.
    function init(settings) {

    var prev;
    interval=setInterval(function(){

        if(settings.random) {
            //random index
            do {
                index=Math.floor(Math.random()*slaytCount);
            }while(index==prev){
                prev=index;
            }
            index=Math.floor(Math.random()*slaytCount);
        } else {
            //artan index
            if(slaytCount==index+1) {
                index=-1;
            }
            ShowSlide(index);
            index++;
        }
        ShowSlide(index);


    },settings.duration)


    };

    //slideri için belirli sınırlamalar yapıldı.
    function ShowSlide(i){
   
        index=i;
        
        if (i<0) {
            index=slaytCount -1;
        }
        if (i>=slaytCount) {
            index=0;
        }

        document.querySelector(".card-title").textContent=models[index].name; //Dinamik Başlık Değişimi
       
        document.querySelector('.card-img-top').setAttribute('src',models[index].image);//Dinamik Fotograf Değişimi
        
        document.querySelector(".card-link").setAttribute('href',models[index].link);//Dinamik Link Değişimi

    };












