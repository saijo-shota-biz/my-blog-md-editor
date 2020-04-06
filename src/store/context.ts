import React, { useCallback, useState } from "react";
import UserSetting from "components/UserSettingLancher";

export type UserSetting = {
  theme: string;
  leftIconUrl: string;
  rightIconUrl: string;
}

export const STORAGE_KEY = "my-blog-md-editor";

const userSetting: UserSetting = JSON.parse(localStorage.getItem(STORAGE_KEY) || `{
  "theme": "cyan-bluegray",
  "leftIconUrl": "http://pictogram2.com/p/p0973/i/m.png",
  "rightIconUrl": "http://pictogram2.com/p/p0823/i/m.png"
}`);

type UserSettingContextType = {
  userSetting: UserSetting,
  setUserSetting: (state: UserSetting) => void
}

export const defaultContext: UserSettingContextType = {
  userSetting,
  setUserSetting: () => {}
};

export const UserSettingContext: React.Context<UserSettingContextType> = React.createContext(defaultContext);

export const useUserSetting = (): UserSettingContextType => {
  const [us, setUs] = useState(userSetting);

  const setUserSetting = useCallback((current: UserSetting): void => {
    setUs(current);
  }, []);

  return {
    userSetting: us,
    setUserSetting
  }
}