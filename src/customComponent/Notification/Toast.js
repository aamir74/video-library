import React, { useCallback, useEffect } from "react";
import NotificationsSystem, {
  atalhoTheme,
  bootstrapTheme,
  useNotifications,
  wyboTheme,
} from "reapop";
import { setUpNotifications } from "reapop";

const Toast = ({ data, heading }) => {
  const { notifications, dismissNotification, notify } = useNotifications();
  // const setAlert = useCallback(() => {
  //   notify({
  //     title: <h3>{data.error ? "Error Occured!" : heading || "Success "}</h3>,
  //     message: <h6>{data.message}</h6>,
  //     status: data.error ? "error" : "success",
  //     dismissible: true,
  //     dismissAfter: 5000,
  //     showDismissButton: true,
  //   });
  // }, [data]);
  // if (data.error || data.success) setAlert();
  useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: "top-center",
        dismissible: true,
      },
    });
  }, []);

  return (
    <div>
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dismissNotification(id)}
        theme={atalhoTheme}
      />
    </div>
  );
};

export default Toast;
