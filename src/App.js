import logo from './logo.svg';
import './App.css';

//Cau hinh router
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaiTapQuanLyForm from './pages/BaiTapQuanLyForm/BaiTapQuanLyForm';


function App() {
  return (
    <BrowserRouter>
      {/* Cau hinh route cho component */}

      <BaiTapQuanLyForm />

      <Switch>
      
        {/* Route mac dinh */}
      </Switch>
    </BrowserRouter>



    // <div className="App">
    //   {/* <TangFontSize /> */}

    //   {/* <HouseColor /> */}

    //   {/* <CarColor /> */}

    //   {/* <RenderArray /> */}

    //   {/* <DemoProps /> */}

    //   {/* <ProductList /> */}

    //   {/* <PhoneShop /> */}

    //   {/* <TangGiamSoLuongRedux /> */}

    //   {/* <CarColorRedux /> */}

    //   <PhoneShopRedux />

    // </div>
  );
}

export default App;
