$(function () {
    var data = [
        ["Java", "1", "降", "-0.01%"],
        ["C", "2", "升", "+2.44%"],
        ["Python", "3", "升", "+1.41%"],
        ["C++", "4", "降", "-2.58%"],
        ["C#", "5", "升", "+2.07%"],
        ["Visual Basic.Net", "6", "降", "-1.17%"],
        ["JavaScript", "7", "降", "-0.85%"],

    ],

        container = $("#hansontable");
    var hot = new Handsontable(container.get(0),
        {
            data: data,
            contextMenu: true,
            manualRowResize: true,
            manualColumnResize: true,
            rowHeaders: true,
            colHeaders: ["语言名称", "排名", "升或将", "变化幅度"]
        });

    return hot;
});
