import React, { useState, useContext, ChangeEvent } from "react";
import "./style.scss";
import { UserSettingContext, UserSetting, STORAGE_KEY } from "store/context";

const UserSettingLancher: React.FC = () => {

  const [open, setOpen] = useState(false);

  const context = useContext(UserSettingContext);

  const [theme, setTheme] = useState(context.userSetting.theme);
  const [leftIconUrl, setLeftIconUrl] = useState(context.userSetting.leftIconUrl);
  const [rightIconUrl, setRightIconUrl] = useState(context.userSetting.rightIconUrl);

  const setting = () => {
    const newUserSetting: UserSetting = { theme, leftIconUrl, rightIconUrl };
    context.setUserSetting(newUserSetting);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUserSetting))
    setOpen(false);
  }

  const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  }

  const onChangeLeftIconUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setLeftIconUrl(event.target.value);
  }

  const onChangeRightIconUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setRightIconUrl(event.target.value);
  }

  return (
    <span className="user-setting">
      <span className="user-setting__activator" onClick={() => setOpen(true)}>
        <i className="fas fa-user-cog"></i>
      </span>
      { open ?
        (
          <div className="user-setting__content">
            <button className="content__close-btn" onClick={() => setOpen(false)}>close</button>
            <div className="content__form">
              <div className="theme-select">
                <label className="theme-select__label" htmlFor="theme-design-select">theme</label>
                <select className="theme-select__input" id="theme-design-select" value={theme} onChange={onChangeSelectHandler}>
                  <option value="cyan">cyan</option>
                  <option value="teal">teal</option>
                  <option value="indigo">indigo</option>
                  <option value="pink">pink</option>
                  <option value="amber">amber</option>
                  <option value="purple">purple</option>
                </select>
              </div>
              <div className="icon-url">
                <label className="icon-url__label" htmlFor="left-icon-url">icon image url for comment:left</label>
                <input className="icon-url__input" id="left-icon-url" placeholder="http://pictogram2.com/p/p0973/i/m.png" value={leftIconUrl} onChange={onChangeLeftIconUrl} />
              </div>
              <div className="icon-url">
                <label className="icon-url__label" htmlFor="right-icon-url">icon image url for comment:right</label>
                <input className="icon-url__input" id="right-icon-url" placeholder="http://pictogram2.com/p/p0823/i/m.png"  value={rightIconUrl} onChange={onChangeRightIconUrl} />
              </div>
              <button className="setting-btn" onClick={setting}>
                <i className="setting-btn__icon fas fa-check"></i>
                <span className="setting-btn__label">setting</span>
              </button>
            </div>
          </div>
        ) : (<></>)
      }
    </span>
  );
}

export default UserSettingLancher;