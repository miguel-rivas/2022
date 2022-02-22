import { DateTime } from "luxon";
import { icons } from "../db/icons";

const initialDate = { years: 1990, months: 5, days: 5, hours: 13, };

const helpers = {
  dateToNumber(date: string): number {
    return parseInt(date.split("/").join(""));
  },
  turingDate(date) {
    const newDate = DateTime.fromISO(date.replace(/[/]/g, "-")).minus(initialDate);
    return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}` : newDate.month} T${newDate.day < 10 ? `0${newDate.day}` : newDate.day}`;
  },
  currentTuringDate() {
    const newDate = DateTime.now().minus(initialDate);
    return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}` : newDate.month} T${newDate.day < 10 ? `0${newDate.day}` : newDate.day}`;
  },
  getID(client: string, date: string): string {
    client = client.replace(/[\s./]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${client}_${date}`;
  },
  getNewID(client: string, date: string): string {
    client = client.replace(/[\s./]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${date}_${client}`;
  },
  spinalCase(label: string) {
    return label
      .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(/[ ]{1,}/g, "-")
      .toLowerCase();
  },
  pascalCase(label: string) {
    return label
      .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(/[ ]{1,}/g, "");
  },
  getIcon(icon) {
    return String.fromCharCode(this.hexToDec(icons[icon]));
  },
  hexToDec(icon) {
    return parseInt(icon, 16);
  },
  rad: Math.PI / 180,
  deg: 180 / Math.PI,
}

export default helpers;