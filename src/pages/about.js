import sekil  from'../photos/image 10.png'
import '../css/about.css'
function About(argument) {
 
return(

    <>
< div  className="container justify-content-center" id="aboutcon2">
 <div className="row justify-content-center" id="row" >

    <div className="col-4 " >
     <a href="/sertifikat" className="btn active "target=".self" id="certificate">Uğur və sertifikatlar</a>
    </div>

    <div className="col-4" >               
     <a href="/brendler" className="btn active"   id="brands"> Brendlər</a>
    </div>

    <div className="col-4" >  
     <a href="#" className="btn "  id="about" > Şirkət haqqında</a>
    </div>
    <br/>
    
 </div>
</div>
 < div  className="container justify-content-center" id="aboutcon" ><br/>

        <h5 className="abouth51"> Şirkətimiz</h5>
        <p className="aboutp1" >40 ildən çoxdur ki, dəri biologiyasına xidmət etməyə həvəsli olan NAOS markasıdır. Dərinin sağlamlığını
        yaxşılaşdırmaq üçün yeniliklərimiz və dermatoloji təşəbbüslərimiz bizi dermatoloji baxımda aparıcı mütəxəssislərə çevirdi.<br/><br/>
        "Ekosistem" və "biologiya" sözlərinin birləşimi olan bu pozitiv yanaşma dərimizin (biologiya, fiziologiya), fərdlərin (həyat tərzi) və 
        planetimizin ekosistemlərinin ayrılmaz şəkildə bağlı olması və bir-biri ilə qarşılıqlı əlaqədə olması ideasına əsaslanır. Bu prinsiplərə
        əsaslanaraq,biz dərinin ətraf mühitə uyğunlaşmasına kömək edirik və təbii funksiyalarını bərpa etmək üçün onun disbalansının 
        səbəbləri ilə bağlı öz işini görmək üçün öz resurslarından istifadə edirik.<br/><br/>
        Bu ekobioloji yanaşmada doğulmuş və köklənmiş <b className="aboutb">Bioderma , Institut Esthederm</b> və <b className="aboutb">Etat Pur NAOS</b>
        fəlsəfəsindən ilhamlanmış 3 markadır və hamısı eyni elmi və insan ehtiyaclarını bölüşür.</p>

        <h5 className="abouth52" > Jean-Noel Torel - təsisçi və novator</h5>
        <div className="aboutdiv4" >
        <img src={sekil} className="aboutimg" />
        <div className="aboutdiv" >“Mən qadınları gözəlləşdirmək üçün məhsullar hazırlamıram, çünkü onlar onsuzda gözəldirlə”</div>
         </div>

        <div className="aboutdiv1" >
         <p  className="aboutp2" >"Etat Pur-u yaratmaqla, bütün dəri tiplərinə və rənglərinə sahib olan hər kəs üçün brend şüarı 
              altında oyunu dəyişdirən bir brend təqdim etmək istədim. Etat Purun missiyası sadəcə olaraq hər şeyi fərqli etmək deyil, 
              həm də daha yaxşısını etməkdir. Etat Pur tamamilə istifadəçi üçün təhlükəsiz və yüksək təsirlidir.
               Eyni zamanda tərkibində lazımsız və dəri uçün zərərli maddələr olmayan məhsullar deməkdir."</p>
        </div>

        <div className="aboutdiv2" >
         <p className="aboutp2"  >"Institut Esthederm dərinin gəncliyini qorumaq, ətraf mühitə və zamanla təkamülə hörmət  etmək üçün yaradılmışdır.
               Başladığımız gündən biz dərinin təbii resurslarından ilhamlanaraq dərini "yenidən öyrədən", onun tarazlığını qoruyan və 
               fərdi dəriyə qulluqformalaşdırırıq. Onun ətraf mühitə uyğunlaşmasına kömək edirik”.</p>
        </div>

        <div className="aboutdiv3" >
          <p className="aboutp2" >"Dərini həddindən artıq müalicə etməyə çalışmaq əvəzinə,
               onun təbii mexanizmini qoruyaraq düzgün işləməyi öyrətmək lazımdır”.</p>
        </div>
 </div>
</>
  )
}
export default About;