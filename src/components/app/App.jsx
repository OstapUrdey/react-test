// import Product from '../product/Product';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>
      
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//     );
//     }

import Alert from "../alert/Alert";

const App = () => {
  return (
    <>
    <Alert variant="info">
        Would you like to browse our recommended products?
    </Alert>
    <Alert variant="error">There was an error during transaction!</Alert>
    <Alert variant="success">There was an error during transaction!</Alert>
    <Alert vatiant="warning">Please update your email!</Alert>
    </>
  );
};

export default App;