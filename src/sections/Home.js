import { useState } from "react";
import pic from '../Photos/yobkgwhite.jpg'

function Home(){

    const [saludo, setSaludo] = useState('Hola, soy')
    const [oficio, setOficio] = useState('Desarrollador de Software')

    function handleText(){
        if(saludo === "Hola, soy")
        {
            setSaludo('Hi, I Am')
            setOficio('Software Developer')
        }else{
            setSaludo('Hola, soy')
            setOficio('Desarrollador de Software')
        }
        clearInterval(id)
    }
    var id = setInterval(function(){
        handleText()
    },2000)

    return(
        <div style={{backgroundColor: "#373b3e",minHeight: "50vh"}} className="text-light d-flex justify-content-between align-items-top vh-100 flex-wrap">
            <div style={{display: "flex", flexDirection:"column", minWidth: '50%',minHeight: "50vh", maxHeight:"52vh",}} >
                <div className="d-flex flex-wrap">
                    <span style={{fontSize: "4rem", fontWeight: "bold"}}>
                        {saludo}
                    </span>
                </div>
                <span style={{fontSize: "4rem", fontWeight: "bold"}}>
                     Facundo Ferrari
                </span>
                <span style={{fontSize: "2rem"}}>
                    {oficio}
                </span>
            </div>
            <div style={{backgroundColor: "white", maxWidth: "maxContent", flex: "1",maxHeight:"100vh"}}>
                <img src={pic} style={{objectFit: "cover", width: "100%", height: "100%", overflow: "hidden"}}/>
            </div>
        </div>
    );
}

export default Home;