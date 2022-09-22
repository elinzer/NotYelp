import fofImage from '../imgs/emptypizza.jpeg'

const FourOhFour = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 style={{position: 'absolute', color: '#e00707', paddingTop: '130px', fontSize: '60px', zIndex: '1'}}> 404 - Whoops, there's nothing here!</h1>
            <img style={{width: '75%', opacity: '80%'}} src={fofImage}></img>
        </div>
    )
}

export default FourOhFour;
