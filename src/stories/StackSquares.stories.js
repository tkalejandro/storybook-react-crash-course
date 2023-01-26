import Stack from "../components/Stack"

export default {
    title: "Components/StackSquares",
    component: Stack,
    argTypes: {
        handleClick: { action: "handleClick" },
        numberOfChildren: { type: "number", defaultValue: 4 }
    }
}

const Template = ({ numberOfChildren, ...args }) => {
    const newArray = Array.apply(null, Array(numberOfChildren))
    return (
        <Stack {...args}>
            {
                newArray.map((_, index) => {
                    console.log(index)
                    return <div style={{
                        width: '100px', height: '100px', backgroundColor: 'cyan',
                        borderRadius: index % 2 === 0 ? '50%' : null,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}

                    >
                        {index}
                    </div>
                })
            }
        </Stack>
    )
}

export const HorizontalSquare = Template.bind({})
HorizontalSquare.args = {
    direction: 'row',
    spacing: 2,
    wrap: false
}

export const VerticalSquare = Template.bind({})
VerticalSquare.args = {
    direction: 'row',
    spacing: 2,
    wrap: false
}

export const Spaced = Template.bind({})
Spaced.args = {
    direction: 'row',
    spacing: 8,
    wrap: false
}
