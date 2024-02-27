import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  public config = {
    settings: {
      layout: 'Seoul',
      layout_type: 'ltr',
      layout_version: 'light-only',
      icon: "stroke-svg",
    },
    color: {
      primary_color: '#1F582D',
    secondary_color: '#40B646'
    },
  }

  constructor() {
    if (this.config.settings.layout_type == "rtl") document.getElementsByTagName("html")[0].setAttribute("dir", this.config.settings.layout_type);

    document.documentElement.style.setProperty("--theme-deafult", localStorage.getItem("primary_color"));
    document.documentElement.style.setProperty("--theme-secondary", localStorage.getItem("secondary_color"));
    let primary = localStorage.getItem("primary_color") || this.config.color.secondary_color;
    let secondary = localStorage.getItem("secondary_color") || this.config.color.secondary_color;
    this.config.color.primary_color = primary;
    this.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") || this.config.color.primary_color;
    localStorage.getItem("secondary_color") || this.config.color.secondary_color;
  }

  setColor(primary_color: string, secondary_color: string) {
    this.config.color.primary_color = primary_color;
    this.config.color.secondary_color = secondary_color;
    localStorage.setItem("primary_color", this.config.color.primary_color);
    localStorage.setItem("secondary_color", this.config.color.secondary_color);
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-deafult", "#1F582D");
    document.documentElement.style.setProperty("--theme-secondary", "#40B646");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value = "#1F582D";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value = "#40B646";
    localStorage.setItem("primary_color", "#1F582D");
    localStorage.setItem("secondary_color", " #40B646");
    window.location.reload();
  }
}
