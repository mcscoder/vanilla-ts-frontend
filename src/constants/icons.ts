import albums from "/src/assets/icons/albums.svg";
import dashboard from "/src/assets/icons/dashboard.svg";
import documentText from "/src/assets/icons/documentText.svg";
import logo from "/src/assets/icons/logo.svg";
import notifications from "/src/assets/icons/notifications.svg";
import printer from "/src/assets/icons/printer.svg";
import calendar from "/src/assets/icons/calendar.svg";
import chevronForward from "/src/assets/icons/chevronForward.svg";
import threeDotsHorizontal from "/src/assets/icons/threeDotsHorizontal.svg";
import addCircle from "/src/assets/icons/addCircle.svg";
import threeDotsVertical from "/src/assets/icons/threeDotsVertical.svg";
import arrowUp from "/src/assets/icons/arrowUp.svg";
import arrowDown from "/src/assets/icons/arrowDown.svg";
import bagHandle from "/src/assets/icons/bagHandle.svg";
import search from "/src/assets/icons/search.svg";
import chevronDown from "/src/assets/icons/chevronDown.svg";
import chevronUp from "/src/assets/icons/chevronUp.svg";
import user from "/src/assets/icons/user.svg";
import masterCard from "/src/assets/icons/masterCard.svg";
import picture from "/src/assets/icons/picture.svg";
import checkCircle from "/src/assets/icons/checkCircle.svg";
import xMark from "/src/assets/icons/xMark.svg";
import bars from "/src/assets/icons/bars.svg";
import google from "/src/assets/icons/google.svg";
import apple from "/src/assets/icons/apple.svg";
import facebook from "/src/assets/icons/facebook.svg";
import logout from "/src/assets/icons/logout.svg";
import checkSuccess from "/src/assets/icons/checkSuccess.svg";
import errorCircle from "/src/assets/icons/errorCircle.svg";
import infoCircle from "/src/assets/icons/infoCircle.svg";
import warning from "/src/assets/icons/warning.svg";

const loadSvg = async (filePath: string) => {
  try {
    const response = await fetch(filePath);
    return await response.text();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const [
  albumsIcon,
  dashboardIcon,
  documentTextIcon,
  logoIcon,
  notificationsIcon,
  printerIcon,
  calendarIcon,
  chevronForwardIcon,
  threeDotsHorizontalIcon,
  addCircleIcon,
  threeDotsVerticalIcon,
  arrowUpIcon,
  bagHandleIcon,
  searchIcon,
  chevronDownIcon,
  chevronUpIcon,
  arrowDownIcon,
  userIcon,
  masterCardIcon,
  pictureIcon,
  checkCircleIcon,
  xMarkIcon,
  barsIcon,
  googleIcon,
  appleIcon,
  facebookIcon,
  logoutIcon,
  checkSuccessIcon,
  errorCircleIcon,
  infoCircleIcon,
  warningIcon,
] = (await Promise.all([
  loadSvg(albums),
  loadSvg(dashboard),
  loadSvg(documentText),
  loadSvg(logo),
  loadSvg(notifications),
  loadSvg(printer),
  loadSvg(calendar),
  loadSvg(chevronForward),
  loadSvg(threeDotsHorizontal),
  loadSvg(addCircle),
  loadSvg(threeDotsVertical),
  loadSvg(arrowUp),
  loadSvg(bagHandle),
  loadSvg(search),
  loadSvg(chevronDown),
  loadSvg(chevronUp),
  loadSvg(arrowDown),
  loadSvg(user),
  loadSvg(masterCard),
  loadSvg(picture),
  loadSvg(checkCircle),
  loadSvg(xMark),
  loadSvg(bars),
  loadSvg(google),
  loadSvg(apple),
  loadSvg(facebook),
  loadSvg(logout),
  loadSvg(checkSuccess),
  loadSvg(errorCircle),
  loadSvg(infoCircle),
  loadSvg(warning),
])) as string[];
