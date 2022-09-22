import fofImage from '../imgs/emptypizza.jpeg'

const FourOhFour = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 style={{position: 'absolute'}}> Whoops, there's nothing here!</h1>
            <img style={{width: '75%'}} src={fofImage}></img>
        </div>
    )
}

export default FourOhFour;
