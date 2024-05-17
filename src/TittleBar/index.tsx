import './index.css';
import { appWindow } from "@tauri-apps/api/window";

function minimizeWindow(): void {
  appWindow.minimize();
}

function toggleMaximizeWindow(): void {
  appWindow.toggleMaximize();
}

function closeWindow(): void {
  appWindow.close();
}

function TittleBar() {
  return (
    <>
      <div data-tauri-drag-region className="titlebar">
        <div className="titlebar-button" id="titlebar-minimize" onClick={minimizeWindow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10">
            <rect width="10" height="1" y="4" fill="#000000" />
          </svg>
        </div>
        <div className="titlebar-button" id="titlebar-maximize" onClick={toggleMaximizeWindow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10">
            <rect width="10" height="10" fill="none" stroke="#000000" stroke-width="2" />
          </svg>
        </div>
        <div className="titlebar-button" id="titlebar-close" onClick={closeWindow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10">
            <line x1="1" y1="1" x2="9" y2="9" stroke="#000000" stroke-width="1" />
            <line x1="9" y1="1" x2="1" y2="9" stroke="#000000" stroke-width="1" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default TittleBar;