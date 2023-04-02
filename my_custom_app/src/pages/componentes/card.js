export default function Card( { data } ) {
    return(
        <span style={{ color: data.color }}>
            { data.text }
        </span>
        );
}