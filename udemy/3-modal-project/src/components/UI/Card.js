// How jsx render map 
// {[<Card />, <Card />]  
import classes from './Card.module.css'

export const Card = (props) => {
    return <div {...props} className={`${props.className} ${classes.card}`}></div>
}
