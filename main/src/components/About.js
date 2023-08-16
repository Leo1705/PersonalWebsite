import '../style/About.css';
import Leo from '../Images/MePic.jpg';
function AboutMe(){
    return(
    
        <div class="aboutUs">
        <h1 class="AboutMeHeading">Who is Leonid?</h1>
        <div class="mainSection">
       
        <img src={Leo} alt="Picture of Leonid Petkovski" width="300" height="300"/>
      
               <p class="textAboutMe">

        Leonid Petkovski is a dedicated and skilled full stack web developer. <br/>
        <br/>
        He is known for his strong work ethic and commitment to his craft. <br/>
        <br/>
        He is a driven individual who consistently goes the extra mile to meet the needs of his clients and provide them with excellent service.







        </p>
   

        </div>
        </div>
       
    )
}
export default AboutMe;