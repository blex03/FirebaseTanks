import './Title.css'

export default function Title(props) {
    return(
        <div className='title'>
            <h1 className='Title'>{props.title}</h1>
        </div>
    )
}