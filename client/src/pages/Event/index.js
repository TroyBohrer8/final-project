// import React, { Component, useEffect, useState } from 'react';

// import Modal from '../components/Modal/Modal';
// import Backdrop from '../components/Backdrop/Backdrop';
// import { useStoreContext } from '../utils/GlobalState';
// import './Events.css';

 



// function EventsPage() {
//     const [state, dispatch] = useStoreContext();
//     const { id } = useParams();

//     const { loading, data } = useQuery(QUERY_PRODUCTS);

  
//     startCreateEventHandler = () => {
//       this.setState({ creating: true });
//     };
  
//     modalConfirmHandler = () => {
//       this.setState({ creating: false });
//     };
  
//     modalCancelHandler = () => {
//       this.setState({ creating: false });
//     };
//       return (
//         <React.Fragment>
//           {this.state.creating && <Backdrop />}
//           {this.state.creating && (
//             <Modal
//               title="Add Event"
//               canCancel
//               canConfirm
//               onCancel={this.modalCancelHandler}
//               onConfirm={this.modalConfirmHandler}
//             >
//               <p>Modal Content</p>
//             </Modal>
//           )}
//           <div className="events-control">
//             <p>Share your own Events!</p>
//             <button className="btn" onClick={this.startCreateEventHandler}>
//               Create Event
//             </button>
//           </div>
//         </React.Fragment>
//       );
//     };
  
//   export default EventsPage;