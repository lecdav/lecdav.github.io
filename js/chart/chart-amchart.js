import { data } from "../data/data-amchart.js";

// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([am5themes_Animated.new(root)]);

var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: am5.percent(100),
    layout: root.verticalLayout,
  })
);

var series = container.children.push(
  am5hierarchy.Tree.new(root, {
    singleBranchOnly: false,
    downDepth: 1,
    initialDepth: 5,
    topDepth: 0,
    valueField: "value",
    categoryField: "name",
    childDataField: "children",
    orientation: "horizontal",
  })
);

series.circles.template.setAll({
  radius: 40,
});

series.outerCircles.template.setAll({
  radius: 40,
});

series.nodes.template.set("tooltipText", "{category}");

series.data.setAll(data);
series.set("selectedDataItem", series.dataItems[0]);
