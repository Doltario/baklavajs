import { NodeBuilder } from "@baklavajs/core/src";

export default new NodeBuilder("MathNode")
    .addInputInterface("Number 1", "NumberOption", 1, { displayName: "Number" })
    .addInputInterface("Number 2", "NumberOption", 10, { displayName: "Number" })
    .addOption("Operation", "SelectOption", "Add", undefined, { items: ["Add", "Subtract"] })
    .addOutputInterface("Output")
    .onCalculate((n, d) => {
        const n1 = n.getInterface("Number 1").value;
        const n2 = n.getInterface("Number 2").value;
        const operation = n.getOptionValue("Operation").selected;
        let result;
        if (operation === "Add") {
            result = n1 + n2;
        } else if (operation === "Subtract") {
            result = n1 - n2;
        }
        n.getInterface("Output").value = result;
    })
    .build();
