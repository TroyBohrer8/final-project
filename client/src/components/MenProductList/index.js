// import React, { useEffect } from 'react';
// import MenProductItem from '../MenProductItem';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_MEN_PRODUCTS } from '../../utils/actions';
// import { useQuery } from '@apollo/client';
// import { QUERY_MEN_PRODUCTS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';

// function MenProductList() {
//   const [state, dispatch] = useStoreContext();

//   const { currentCategory } = state;

//   const { loading, data } = useQuery(QUERY_MEN_PRODUCTS);

//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: UPDATE_MEN_PRODUCTS,
//         menproducts: data.menproducts,
//       });
//       data.menproducts.forEach((menproduct) => {
//         idbPromise('menproducts', 'put', menproduct);
//       });
//     } else if (!loading) {
//       idbPromise('menproducts', 'get').then((menproducts) => {
//         dispatch({
//           type: UPDATE_MEN_PRODUCTS,
//           menproducts: menproducts,
//         });
//       });
//     }
//   }, [data, loading, dispatch]);

//   function filterMenProducts() {
//     if (!currentCategory) {
//       return state.menproducts;
//     }

//     return state.menproducts.filter(
//       (menproduct) => menproduct.category._id === currentCategory
//     );
//   }

//   return (
//     <div className="my-2">
//       <h2>Men Products:</h2>
//       {state.products.length ? (
//         <div className="flex-row">
//           {filterMenProducts().map((product) => (
//             <MenProductItem
//               key={product._id}
//               _id={product._id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               quantity={product.quantity}
//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any products yet!</h3>
      
//       )}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//     </div>
  
//   );
  
// }

// export default MenProductList;
