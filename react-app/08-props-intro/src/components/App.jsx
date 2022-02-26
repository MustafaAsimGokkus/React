import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App(){
    return <div>
       <Header />
       <Note name="John" age= "20"/>
       <Note name="Sam"/>
       <Note name="Tim"/>
       <Footer />
    </div>
}
export default App;