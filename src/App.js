import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Components*/
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

/*Screens*/
import Main from "./Screens/Main/Main";

function App() {
  return (
   <>
      <Header />
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Main />} />
           </Routes>
       </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
