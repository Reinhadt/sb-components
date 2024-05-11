import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, Props } from "../../components/MyLabel";

const meta:Meta<Props> = {
  title: 'UI/Labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'inline-radio'},
    fontColor: { control: 'color'},
    allCaps: {control:'boolean'},
  }
} satisfies Meta<typeof MyLabel>;


export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args:{
    label: 'Hola label',
  }
}

export const AllCaps: Story = {
  args:{
    label: 'All Caps label',
    allCaps: true
  }
}

export const Secondary: Story = {
  args:{
    label: 'Secondary label',
    color: 'text-secondary',
  }
}

export const CustomColor: Story = {
  args:{
    label: 'Custom color label',
    fontColor: '#359483'
  }
}