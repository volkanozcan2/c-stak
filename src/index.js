import "./simple-grid.min.css";
import "./main.css";
import $ from "jquery";
import { arr } from "./src.js";
const rndColor = () => "#" + ((1 << 24) * Math.random() | 0).toString(16);
$(document).ready(() => {
    var context = new AudioContext()
    var o = context.createOscillator()
    o.type = "sine";
    o.frequency.value = 100;
    o.connect(context.destination)
    o.start()
    $("body").css("visibility", "visible");
    setInterval(() => {
        let color = rndColor()
        $("body").css("background-color", color);
        $("p").css("color", color);
        $("p").css("filter", "invert(100%)");
        $("p").css("font-size", `${50+Math.random()*5}px`);
        o.frequency.value = 1000 + Math.random() * 100;
        $("*").css("font-family", arr[~~(Math.random() * arr.length)]);
    }, 50);
    console.log(arr[0]);
})