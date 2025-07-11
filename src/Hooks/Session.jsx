// import { useEffect } from "react";
// import { handleLogout } from "./auth";


// const useSessionTimeout = (timeoutDuration = 30 * 60 * 1000) => {
//   const { logout } = handleLogout();

//   useEffect(() => {
//     let timer;

//     const resetTimer = () => {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         logout();
//       }, timeoutDuration)
//     };

//     const events = ["click", "mousemove", "keydown"];
//     events.forEach((event) => document.addEventListener(event, resetTimer));

//     resetTimer();

//     return () => {
//       clearTimeout(timer);
//       events.forEach((event) => document.removeEventListener(event, resetTimer));
//     };


//   }, [logout, timeoutDuration])
// }

// export default useSessionTimeout