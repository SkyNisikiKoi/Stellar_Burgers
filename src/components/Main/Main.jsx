import './Main.css';

export function Main(props) {

    return (
        <main className='main'>
            {props.children}
        </main>
    );
}