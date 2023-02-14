import { defineStore } from "pinia";

export const useMenu = defineStore("menu", () => {
  const mainMenu = [
    {
      name: "home",
      title: "Dashboard",
      icon: "fa-solid fa-gauge",
    },
    {
      name: "user",
      title: "Users",
      icon: "fa-solid fa-users",
    },
    {
      name: "transaksi",
      title: "Transaksi",
      icon: "fa-solid fa-money-bill",
    },
  ];
  const transaksiSideMenu = [
    {
      name: "transaksi.income",
      title: "Transaksi Masuk",
    },
    {
      name: "transaksi.outgoing",
      title: "Transaksi Keluar",
    },
  ];
  return { mainMenu, transaksiSideMenu };
});
