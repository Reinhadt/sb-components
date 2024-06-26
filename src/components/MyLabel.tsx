import './MyLabel.css'

export interface Props {
  /** 
   * Text to display 
  */
  label: string;
  /** 
   * Label size
  */
  size?: 'h1'|'h2'|'h3'|'regular';
  /***
   * All Caps label
  */
  allCaps?: boolean;
  /***
   * Label Color
  */
  color?: 'text-primary'| 'text-secondary'|'text-tertiary';
  /***
   * Font Color
  */
 fontColor?: string;
}


export const MyLabel = ({label, size='regular', allCaps=false, color, fontColor=''}:Props) => {
  return (
    <span style={{color: fontColor}} className={`${size} ${color}`}>{allCaps ? label.toUpperCase() : label}</span>
  )
}
