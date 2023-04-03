export default function Card( { data } ) {
    return(
        <span style={{ color: data.colortexto }}>
            { data.text }
        </span>
        );
}