import Square from "../components/Square";

export default {
    title: "Components/Square",
    component: Square,
    argTypes: { handleClick: { action: "handleClick" } }
}

const Template = args => <Square {...args} />

export const Yellow = Template.bind({})
Yellow.args = {
    label: "click me",
    backgroundColor: "yellow",
    color:"black",
    size: "md"
}

export const Blue = Template.bind({})
Blue.args = {
    label: "click me",
    backgroundColor: "blue",
    color: "white",
    size: "md"
}

export const Red = Template.bind({})
Red.args = {
    label: "click me",
    backgroundColor: "red",
    size: "md",
    color: "white",
}