/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  excuseGenerator();
};

let who = ["Mi perro", "Mi abuelo", "El vecino", "Mi jefe"];
let action = ["atropelló", "fumó", "mordió", "orinó"];
let what = ["mi cama", "mi pelota", "mi puro", "a la monja"];
let when = [
  "en la oficina",
  "cuando jugaba futbol",
  "en un bailetón",
  "cuando dormía",
  "saliendo de la iglesia"
];

let perro = [
  "https://blog.gudog.com/wp-content/uploads/2014/11/GIF-15.gif",
  "https://blog.gudog.com/wp-content/uploads/2014/11/GIF-3.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNnYXFoYzM1NDc1cjI2NGwyd2M0cWI3ZTdma2QwYWZ5dmpwNGRlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7JkVs9cKgq7VC/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHN5eXBjMjc2emI1Y3Z4am1jemlmeWlnemxyNGt2anI0Nnc1bDF0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKHGnB1ml0moQdjhEJ/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjlnNG43MjQzOHBrNjh0NHZqMjl5dGNha2d4MWRqbWdma2ZvOXprMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FY8c5SKwiNf1EtZKGs/giphy.webp"
];
let vecino = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGd6emR3ZGNhYTFxNjhiMGF2ZGRkczN5c2Q5MnhjeGplcmx5cng5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RN8d1fuMUggNsDalqy/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ3NHhiZ2tqeXg0dXZzaWpnbHp5aDFoNnl5NTJmb3Npb3UzNXhsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3EiNpweH34XGoQcq9Q/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejBtaGVyc3A0OGlvNmNqcG16b3htaDMyYWFxa3lkNTZ2Z2Y5bGxzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4ZswIRaLo7i5q/giphy.webp"
];
let abuelo = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVoYXE2NjU5cXNqYmk5bjgybXBhbjkwdmdwZzcwYXdvajA0Y3VxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohc0Xf2ub7OpyAAmY/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWNnOHZzc3FpMmQzeGJoNWswOWJrbHE4Y2piMWNqajliMG5xODFjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SdHqzlS8f2vYs/giphy.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmhnc3Y4MjZweGxyODdsdGF6cXFqdzkzM3Fub3J4Y2xkY2ljYjJ6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Oh3lThRTzxx6/giphy.webp"
];
let jefe = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjFyM3V3a2M5M3UxZ2FlYjV6b2I1dmNrdGI2YmF5ODlieHphbTNkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26wkRxKJ9yUZzlorK/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ5OGpnaDZkeXRjcWFja3gxeTlhZndkY3d0MWw5ODFtaDBwejdmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs81rDuEz9ioJzAA/giphy.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhxNjR4aTk5eG1jc3RzMDlyazczb2Jic3QwMHc2ZmF5eHBqbWJ4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qOLT5C2SxNINSREyx9/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTRneXlzaDA5YmFwN2pqeGEzamtxdHp1ZzZucGNvd2lsdGQ0b2x5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDSOvfaCO9b3MlO/giphy.webp"
];

let atropella = [
  "https://cdn1.eldia.com/062021/1623261211328.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2N1ZGRtaTAyamJxamxmbW1zYjZmbnA4aXg5aTJzYXM3ejVwc3V3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jwKC0qlOoXmcLDB4vC/giphy.webp",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2YyY3BsbTExNW85b254YWdrZGs5bWxzNDFoN3d0NW9pZTIzcGJibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i34oXbluCO0G4/giphy.webp"
];
let fuma = [
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJ4bnlvZTRidXpnczZ3bWg5Nmtsa3ZzYzYyd3o0cmpzNmwwZjRuZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MbnJqxxg3ljU8KvCF5/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGcyeTF4bWZmcHJ3NXZiN2FsZ3A3aDU3bXgyYTN4YmF5d2I5OHg5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8ciWO0w9pMbX78Gu5f/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW0zZ3RhdzZ2b2E3dzhydWRpdmhlOTU4ZDNka2F6d2h2eGY2OHVmdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kj6ADcuUnpn68/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm9wcHJnYWQxeW5qNnU0OHcydHVnNW8wYXpseGp5dTdpYndoaGNndCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDarLUQd5DqgXHJks/giphy.webp"
];
let muerde = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWRvOG14aHduOWM4ODd4dndvdXNqcGpwdmoybmg5YzNhandueDl3aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dSi6nSNvQh33y/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTU0MWRpOTV3NW1wdTRwcWdqY2Rhb3d4ZHplMmRwZTBpeTVzYzMwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CMbJZkUvFDAlUWoYyK/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Q3cnhnYm92ZXIwcGt2enBzbTNkajBtdm16bmdqbm9pMHF6Y2tweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KwgMrD2iJgKly/200.webp"
];
let orina = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnpyMGxsY2xlZWxwYnkzc2NnM2h3M2EyYWNmbWh0ZnhtbDVhYWJpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NUJZKPi2CpqpO/giphy.webp",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMno1bjQ1b2Q5b2pvamp2d3V1YmJidWFzM3lyaXg1a3V5eHFqNGJzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PPJUG5hkveGQ0/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWNreTFlNWRxaW03Y3VyOHprZnVydHIwYW1ubWZpazl5ZnNsYTd3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vdoIkuodf8jQc/giphy.webp"
];

let cama = [
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXVhempvY3djMXZqYml6bmluY2l1cWxvaXN1eXRvengwbnc3MjEzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wsUuw16j6oyxLLRnnK/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2gxcjRqNjN2ZDBqNnN1cW4yY3Yxa2g5eWdmNmhzaXFidTJrcW5iNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TtYHzz330lASA/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGtuM3ZicjV5dzJldmhvZHQ1NGl0cnB1NDRocTd0cW1jeGxybnBrdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1iTItUOuJLsbev28/giphy.webp"
];
let pelota = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDN2OG9wcmJ5eDBwNWFkcTM3NmlkbWh6b2JlMm1kYnF2c2VkZHAyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3bc5MV3VkOpMI/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzh0MWFlOHhnaG9qMXAwMmluNnc4N2JkZjVtc3hpY2RqY2g0cjZpcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eYzZU9bix6N9K/giphy.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTA3OWt0dGRtMXAwemMyc3pkem1nNW9yOHdqdzM1Z3RlZGs0cDVzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xkCK3tAhDSUBa/giphy.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmliZDJ2YXJjamdlaTBsamxmY2h3c2ZhdTIwOTdoMnR1eDZqazU3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rlL4XHR60GPew/200.webp"
];
let puro = [
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHloMzUyYjNyaWFqdHh0N2NnOWJzNWsxajl4bzlsYzdnYzQ5bTh6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohfFDrKl5yQuQlgc0/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWdpdWxueWo3d2Vwc3BscmhpaHJ2N2xqaHFhMjN5OTVsMmtzb2RueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xv0dyjkSmaUdG/giphy.webp",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExem01Y3U5c2I1czBtbnFjcGh4MTV5aXc4YTN5d3RlMzF2dXM3cWp0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZBNLpSsFjHPeo/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmozb3JucnRjaDd4d3RybDY5ZjBmMjN0djY1ZzBtbnBjeWJxYmcxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KzDqC8LvVC4lshCcGK/giphy.webp"
];
let monja = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWNmNmdzcW9pYTV1eWdrdW9nMTVldHg5dDNjNHRtN2s1czl5bWN0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hezc7HyRuylXO/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHp5OGxoN2k1NWVuejJ1OWE1bjkxZmZvdTlrZmI0dHRjdWl6bDQxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bZrQ4bFxXpbhK/200.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2RxdnA5NDVjMG5rc2FhcjluazdxZnF1NjZyaDRlOTY0Y2h5aDkwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M8Q94NCWLqURTLvRz0/giphy.webp"
];

let oficina = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXdwdzdpYW8yMW1rNGVmNnA2a2E2aXNzNTJydjhsazdwc3E0a2I0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7hJZcKzjIufeOmqKSj/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWExY3B2dDBjMzhyNGo4cTlrNWxvaTF4aWpleHhxeWxvam1yZWR0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iRzlyqHL8hJTy/200.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ29kZ3Y4NjRkZ3JwOXF6Y21qc3RseDR0azJkZzV4c3gxZ2U4MHUyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h5YVgPjRDh41G/200.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzF0ZG00a2w5eHB6MTQzcjI3dmpwczd2b2tpc2F3ZGswZmRsazQxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ki8OPnbjmlXe6sGs2H/giphy.webp"
];
let futbol = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGR6dnQzOWFuNGxhd3RlaDZoejVoYm5pemRpNWJyZm9zYm1pdzAwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGTTNpVuGVhN6/200.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVtZWZtdjN2bGtmZXdheTVsdDl2OXB2dnh6ZWhld2pnMTE0YXA5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/guJZ84aiImq5i/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmU2ejgyODBnM2xscG9kdTZ0OTJjaWdnMng3ZWUyOGNmNXYzZmU0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z814KHJuoNck0/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjBxNTd0cTJ3end5eDB2NzNzaHZ5cXY2aGtma3VxZTh6dDkxMHJkOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xYRvkBcJhbSr6/giphy.webp"
];
let dormir = [
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeno3cTVrdWY2OWFiemJpaHo4MWdkNTdwZWRsZ2JldnloeW43cHU5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBvH1pAhtfSx52U/200.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Nucm5nZDk1emxuNDc4OHg3dzB4OTZuMXduZTcybHA0aDJkOXF2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FOo4JKj6TUQuY/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWp1MnV1cTU4cTQ2eGJqeGQ2N2F1bnN2YnYxamczYnZkc2Z3eXE1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eBCnpuRGBhQGY/giphy.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW9tOHZ6bXFzM3BwcXFzZHB2MW8yajBydDlmNDF5dTcxc2VrMjhybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N4a7e1ftdbQWc/200.webp"
];
let iglesia = [
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmppYzdyanNzMjlqZTVvNXFmampzY2I0bDNxbnlya25lc3IzN211YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oD3YJVnCAtIY050ha/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajEycmVxMWM5bDEyc21vdWpqa2FwN3o2Yzlxdjd5ZWc4bWlwZHZnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tbSrCf6nP7Iy9ropgF/giphy.webp",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Y3OGxmdGViMnFhb3Jyc2dibjhwd3BlazhqeG9qcW95ZnJld3dycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CEVvjHH3XszUQ/200.webp"
];
let baileton = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmxzanJpemoxMHNqN3pyOWZnOGt1eDVsbHQzYzhhc2lnNDllZHVqNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gs6RKvzfgsWRg3e/giphy.webp",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWpidnkyaGtyaXF4MXBtdjl3c2hyNGcwbTg3MmFtbjRxYzgyZm9vOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hL2drrlDYvkrs6oFig/giphy.webp",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxmYjc1ZnB0bmZ3MWoxbzVyMWxoMDlvZW9mbjhvNjg0Z3dueDAwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cklPOHnHepdwBLRnQp/giphy.webp",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZnazMzamR0Y24yd3RzN3c1c3NpaGd6aWd0aThwYWZhMWd6amZxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TH71cRslLDQeuCU1ZG/giphy.webp"
];

function excuseGenerator() {
  var whoAleatorio = who[Math.floor(Math.random() * 4)];
  var actionAleatorio = action[Math.floor(Math.random() * 4)];
  var whatAleatorio = what[Math.floor(Math.random() * 4)];
  var whenAleatorio = when[Math.floor(Math.random() * 5)];

  var perroAl = perro[Math.floor(Math.random() * 3)];
  var abueloAl = abuelo[Math.floor(Math.random() * 3)];
  var vecinoAl = vecino[Math.floor(Math.random() * 3)];
  var jefeAl = jefe[Math.floor(Math.random() * 4)];

  var atropellaAl = atropella[Math.floor(Math.random() * 3)];
  var fumaAl = fuma[Math.floor(Math.random() * 4)];
  var muerdeAl = muerde[Math.floor(Math.random() * 3)];
  var orinaAl = orina[Math.floor(Math.random() * 3)];

  var camaAl = cama[Math.floor(Math.random() * 3)];
  var pelotaAl = pelota[Math.floor(Math.random() * 4)];
  var puroAl = puro[Math.floor(Math.random() * 4)];
  var monjaAl = monja[Math.floor(Math.random() * 3)];

  var oficinaAl = oficina[Math.floor(Math.random() * 4)];
  var dormirAl = dormir[Math.floor(Math.random() * 4)];
  var iglesiaAl = iglesia[Math.floor(Math.random() * 3)];
  var bailetonAl = baileton[Math.floor(Math.random() * 4)];
  var futbolAl = futbol[Math.floor(Math.random() * 4)];

  if (whoAleatorio == "Mi perro") {
    document.querySelector("#img-excuse").setAttribute("src", perroAl);
  }
  if (whoAleatorio == "Mi abuelo") {
    document.querySelector("#img-excuse").setAttribute("src", abueloAl);
  }
  if (whoAleatorio == "Mi jefe") {
    document.querySelector("#img-excuse").setAttribute("src", jefeAl);
  }
  if (whoAleatorio == "El vecino") {
    document.querySelector("#img-excuse").setAttribute("src", vecinoAl);
  }

  if (actionAleatorio == "atropelló") {
    document.querySelector("#img-excuse2").setAttribute("src", atropellaAl);
  }
  if (actionAleatorio == "fumó") {
    document.querySelector("#img-excuse2").setAttribute("src", fumaAl);
  }
  if (actionAleatorio == "mordió") {
    document.querySelector("#img-excuse2").setAttribute("src", muerdeAl);
  }
  if (actionAleatorio == "orinó") {
    document.querySelector("#img-excuse2").setAttribute("src", orinaAl);
  }

  if (whatAleatorio == "mi cama") {
    document.querySelector("#img-excuse3").setAttribute("src", camaAl);
  }
  if (whatAleatorio == "mi pelota") {
    document.querySelector("#img-excuse3").setAttribute("src", pelotaAl);
  }
  if (whatAleatorio == "mi puro") {
    document.querySelector("#img-excuse3").setAttribute("src", puroAl);
  }
  if (whatAleatorio == "a la monja") {
    document.querySelector("#img-excuse3").setAttribute("src", monjaAl);
  }

  if (whenAleatorio == "en la oficina") {
    document.querySelector("#img-excuse4").setAttribute("src", oficinaAl);
  }
  if (whenAleatorio == "cuando jugaba futbol") {
    document.querySelector("#img-excuse4").setAttribute("src", futbolAl);
  }
  if (whenAleatorio == "en un bailetón") {
    document.querySelector("#img-excuse4").setAttribute("src", bailetonAl);
  }
  if (whenAleatorio == "cuando dormía") {
    document.querySelector("#img-excuse4").setAttribute("src", dormirAl);
  }
  if (whenAleatorio == "saliendo de la iglesia") {
    document.querySelector("#img-excuse4").setAttribute("src", iglesiaAl);
  }

  let excuse =
    whoAleatorio +
    " " +
    actionAleatorio +
    " " +
    whatAleatorio +
    " " +
    whenAleatorio;

  var excuseComplete = (document.querySelector("#excuse").textContent = excuse);
  //console.log(excuse);
  return excuseComplete;
}
