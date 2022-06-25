import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const App = () => {
    return (
      <div className="app-container">
        <ReactNotifications />
      </div>
    )
  };
  
  Store.addNotification({
    title: "Wonderful!",
    message: "teodosii@react-notifications-component",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });