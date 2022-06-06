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
