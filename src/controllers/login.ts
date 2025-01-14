import { CustomEventManager } from "../events";
import { AdminLoginRequest, AdminRegisterRequest } from "../models";
import { Router } from "../routes";
import { apiService } from "../service";
import { storageManager } from "../utils";
import { Toast } from "../views/components";
import { Controller } from "./controller";

export class LoginController extends Controller {
  async fetchData(initContent: () => void) {
    initContent();
  }

  async authenticate({
    admin,
    isKeepLogged = false,
    navigateTo = "/",
    autoNavigate = true,
    isAlert = true,
  }: {
    admin: AdminLoginRequest;
    isKeepLogged?: boolean;
    navigateTo?: string;
    autoNavigate?: boolean;
    isAlert?: boolean;
  }): Promise<boolean> {
    try {
      console.log(admin);
      const data = await apiService.request(
        "POST",
        "adminAuthentication",
        undefined,
        undefined,
        admin
      );

      if (isKeepLogged) {
        // write admin data to local storage if keep logged was specified
        // because that would not be auto removed
        storageManager.set("local", "admin", data);
      } else {
        // else write data to session storage if keep logged was not specified
        // because that would be removed when current tab was closed
        storageManager.set("session", "admin", data);
      }

      // Dispatch logging event
      CustomEventManager.dispatchEvent("logging");

      if (autoNavigate) {
        Router.navigateTo(navigateTo);
      }

      return true;
    } catch (error) {
      // Authentication failed
      if (isAlert) {
        Toast.alert({ message: "Login failed", type: "ERROR" });
      }

      // remove user data when authentication is failed
      storageManager.remove("local", "admin");
      storageManager.remove("session", "admin");

      return false;
    }
  }

  async register(admin: AdminRegisterRequest) {
    try {
      await apiService.request("POST", "register", undefined, undefined, admin);

      Toast.alert({ message: "Register success", type: "SUCCESS" });

      Router.navigateTo("/login");
    } catch (error) {
      alert(error);
    }
  }
}
