var chat_section = $("#chat_section");
var auth_section = $("#auth_section");

// login
const login = (phone) => {
  window.addEventListener(
    "DOMContentLoaded",
    (event) => {
      CometChatWidget.login({
        uid: phone,
      }).then(
        (response) => {
          chat_section.css("display", "");
          auth_section.css("display", "none");

          CometChatWidget.launch({
            widgetID: "widgetID",
            target: "#cometchat",
            roundedCorners: "true",
            height: "500px",
            width: "800px",
            defaultID: "superhero1", //default UID (user) or GUID (group) to show,
            defaultType: "user", //user or group
          });
        },
        (error) => {
          console.log("User login failed with error:", error);
          //Check the reason for error and take appropriate action.
        }
      );
    }
  );
};

// logout
const logout = () => {
  CometChat.logout().then(
    () => {
      //Logout completed successfully
      console.log("Logout completed successfully");
      chat_section.css("display", "none");
      auth_section.css("display", "");
      window.location.replace("index.php");
    },
    (error) => {
      //Logout failed with exception
      console.log("Logout failed with exception:", { error });
    }
  );
};