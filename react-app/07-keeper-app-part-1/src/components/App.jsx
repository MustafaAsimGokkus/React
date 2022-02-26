import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
function App() {
    return <div>
        <Header />
        <Note name = "John" age="20" city="Dallas"/>
        <Note name = "Sam" age="25" city="NYC"/>
        <Note name = "Tim" age="40" city="Bremen"/>
        
        <Footer />
    </div>
}
export default App;